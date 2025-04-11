import { useRoute } from 'wouter';
import { useState, useEffect, useContext } from 'react';
import { Copy, Check, Eye, Heart, Star } from 'lucide-react';
import { RatingStars } from '../../components/rating-stars/RatingStars';
import { PromptContext } from '../../context/PromptContext';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, query, where, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './promptDetails.css';
import { SEO } from '../../components/seo/SEO';
import { useAnalytics } from '../../hooks/useAnalytics';

export function PromptDetails() {
  const [, params] = useRoute('/prompt/:id');
  const { selectedPrompt } = useContext(PromptContext);
  const [prompt, setPrompt] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'highest', 'lowest'
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [viewCounted, setViewCounted] = useState(false);
  const { logPromptView, logPromptCopy, logPromptLike } = useAnalytics();

  useEffect(() => {
    if (selectedPrompt && selectedPrompt.id === params?.id) {
      loadPromptFromFirestore();
    } else {
      loadPromptFromFirestore();
    }
  }, [params?.id, selectedPrompt]);

  useEffect(() => {
    if (user && prompt) {
      setLikeCount(prompt.likes || 0);
      const userLikes = prompt.userLikes || [];
      setLiked(userLikes.includes(user.uid));
    }
  }, [user, prompt]);

  useEffect(() => {
    const handleViewCount = async () => {
      
      if (prompt?.docId && !viewCounted) {
        await incrementViews(prompt.docId);
        setViewCounted(true);
      }
    };

    handleViewCount();
  }, [prompt?.docId, viewCounted]);

  useEffect(() => {
    if (prompt) {
      logPromptView(prompt.id, prompt.title);
    }
  }, [prompt?.id]);

  const loadPromptFromFirestore = async () => {
    try {
      const promptsRef = collection(db, 'prompts');
      const q = query(promptsRef, where('id', '==', params?.id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const promptDoc = querySnapshot.docs[0];
        const firestoreId = promptDoc.id;
        
        const promptData = {
          ...promptDoc.data(),
          docId: firestoreId,
          id: params?.id
        };
        
        setPrompt(promptData);
        await fetchReviews(firestoreId);
      } else {
        setPrompt(null);
      }
    } catch (error) {
      console.error('Error al cargar el prompt:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async (docId) => {
    try {
      const reviewsRef = collection(db, `prompts/${docId}/reviews`);
      const reviewsSnapshot = await getDocs(reviewsRef);
      const reviewsData = reviewsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRatings(reviewsData);
    } catch (error) {
      console.error('Error al cargar reviews:', error);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      logPromptCopy(prompt.id, prompt.title);
    } catch (error) {
      alert('Error al copiar, inténtalo de nuevo.');
    }
  };

  const handleSubmitReview = async () => {
    if (!user || newRating === 0 || !newComment.trim()) {
      alert('Debes estar autenticado y completar la reseña.');
      return;
    }

    const reviewData = {
      rating: newRating,
      comment: newComment.trim(),
      author: user.displayName || user.email,
      createdAt: new Date().toISOString(),
      userId: user.uid
    };

    try {
      const reviewsRef = collection(db, `prompts/${prompt.id}/reviews`);
      await addDoc(reviewsRef, reviewData);
      setRatings([...ratings, reviewData]);
      updateAvgRating(prompt.id);
      setNewRating(0);
      setNewComment('');
    } catch (error) {
      console.error('Error al agregar review:', error);
    }
  };

  const updateAvgRating = async (promptId) => {
    try {
      const reviewsRef = collection(db, `prompts/${promptId}/reviews`);
      const reviewsSnapshot = await getDocs(reviewsRef);
      const reviewsData = reviewsSnapshot.docs.map((doc) => doc.data());

      if (reviewsData.length === 0) return;

      const totalRating = reviewsData.reduce((sum, review) => sum + review.rating, 0);
      const avgRating = totalRating / reviewsData.length;

      const promptRef = doc(db, 'prompts', promptId);
      await updateDoc(promptRef, { avgRating });

      setPrompt((prev) => ({ ...prev, avgRating }));
    } catch (error) {
      console.error('Error al actualizar avgRating:', error);
    }
  };

  const incrementViews = async (docId) => {
    try {
      const promptRef = doc(db, 'prompts', docId);
      
      const promptSnap = await getDoc(promptRef);
      if (!promptSnap.exists()) {
        console.error('No se encontró el documento en Firestore');
        return;
      }

      const currentViews = promptSnap.data().views ?? 0;
      
      await updateDoc(promptRef, {
        views: currentViews + 1
      });

      setPrompt(prev => ({
        ...prev,
        views: currentViews + 1
      }));

    } catch (error) {
      console.error('Error al actualizar las vistas:', error);
    }
  };

  const avgRating = ratings.length ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 0;

  const sortedRatings = [...ratings].sort((a, b) => {
    switch (sortBy) {
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'newest':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const handleLike = async () => {
    if (!user) {
      alert('Debes iniciar sesión para dar like');
      return;
    }

    try {
      const promptRef = doc(db, 'prompts', prompt.docId);
      const userLikes = Array.isArray(prompt.userLikes) ? prompt.userLikes : [];
      const currentLikes = prompt.likes ?? 0;
      const newLikeStatus = !liked;
      
      const newLikeCount = newLikeStatus 
        ? (currentLikes + 1) 
        : (currentLikes - 1);
      
      const updatedUserLikes = newLikeStatus
        ? [...userLikes, user.uid]
        : userLikes.filter(id => id !== user.uid);

      await updateDoc(promptRef, {
        likes: newLikeCount,
        userLikes: updatedUserLikes
      });

      setLiked(newLikeStatus);
      setLikeCount(newLikeCount);
      
      setPrompt(prev => ({
        ...prev,
        likes: newLikeCount,
        userLikes: updatedUserLikes
      }));

      logPromptLike(prompt.id, prompt.title);

    } catch (error) {
      console.error('Error al actualizar likes:', error);
      alert('Error al actualizar el like. Por favor, intenta de nuevo.');
    }
  };

  if (loading) {
    return <div className="container">Cargando...</div>;
  }

  if (!prompt) {
    return <div className="container">Prompt no encontrado</div>;
  }

  return (
    <>
      {prompt && (
        <SEO 
          title={prompt.title}
          description={prompt.description}
          keywords={`${prompt.title}, prompts desarrollo, ChatGPT, ${prompt.tags?.join(', ')}`}
          type="article"
          url={`https://promptsfordevs.com/prompt/${prompt.id}`}
        />
      )}
      <div className="container-prompt-details">
        <div className="prompt-details">
          <div className="card">
            <div className="prompt-header">
              <div>
                <h1 className="title">{prompt.title}</h1>
                <div className="prompt-stats">
                  <div className="stat">
                    <Eye size={16} />
                    <span>{prompt.views || 0} vistas</span>
                  </div>
                  <div className="stat">
                    <button 
                      className={`like-button ${liked ? 'liked' : ''}`}
                      onClick={handleLike}
                      disabled={!user}
                    >
                      <Heart 
                        size={16} 
                        fill={liked ? 'currentColor' : 'none'} 
                      />
                      <span>{likeCount}</span>
                    </button>
                  </div>
                  <div className="stat">
                    <Star size={16} />
                    <span>{avgRating.toFixed(1)} ({ratings.length} reviews)</span>
                  </div>
                </div>
              </div>
              {prompt.isFeatured && (
                <div className="featured-badge">
                  <Star size={16} />
                  Destacado
                </div>
              )}
            </div>
            <div className="info flex gap-4 mb-6">
              <div className="rating-container flex gap-2">
                <RatingStars rating={avgRating} size={20} />
                <span className="text-sm text-muted-foreground">({avgRating.toFixed(1)})</span>
              </div>
            </div>
            <div className="description prose">
              <h2>Descripción</h2>
              <p>{prompt.description}</p>
            </div>
            <div className="full-content">
              <h2>Prompt</h2>
              <div className="prompt-container">
                <pre>{prompt.content}</pre>
                <button 
                  className="button-outline" 
                  onClick={() => copyToClipboard(prompt.content)}
                  title="Copiar prompt"
                >
                  {copied ? <Check /> : <Copy />}
                </button>
              </div>
            </div>

            {/* Formulario para agregar una review */}
            {user && (
              <div className="add-review">
                <h2>Deja tu review</h2>
                <div className="rating-input">
                  <p className="text-sm text-muted-foreground mb-2">¿Cómo calificarías este prompt?</p>
                  <RatingStars rating={newRating} size={24} onRate={setNewRating} />
                </div>
                <div className="comment-input">
                  <p className="text-sm text-muted-foreground mb-2">Tu comentario</p>
                  <textarea
                    placeholder="Escribe tu opinión sobre este prompt..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </div>
                <button 
                  className="button" 
                  onClick={handleSubmitReview}
                  disabled={!newRating || !newComment.trim()}
                >
                  Enviar Review
                </button>
              </div>
            )}

            {/* Sección de reviews */}
            {ratings.length > 0 && (
              <div className="reviews-container">
                <div className="reviews-header">
                  <h2 className="text-xl font-semibold">Reviews</h2>
                  <div className="sort-options">
                    <button 
                      className={`sort-button ${sortBy === 'newest' ? 'active' : ''}`}
                      onClick={() => setSortBy('newest')}
                    >
                      Más recientes
                    </button>
                    <button 
                      className={`sort-button ${sortBy === 'highest' ? 'active' : ''}`}
                      onClick={() => setSortBy('highest')}
                    >
                      Más positivas
                    </button>
                    <button 
                      className={`sort-button ${sortBy === 'lowest' ? 'active' : ''}`}
                      onClick={() => setSortBy('lowest')}
                    >
                      Más negativas
                    </button>
                  </div>
                </div>
                {sortedRatings.map((rating) => (
                  <div key={rating.id} className="review">
                    <div className="rating flex gap-2">
                      <RatingStars rating={rating.rating} size={16} />
                      <span className="text-sm text-muted-foreground">
                        ({rating.rating.toFixed(1)})
                      </span>
                    </div>
                    <p className="comment">{rating.comment}</p>
                    <div className="footer">
                      <span className="author">{rating.author}</span>
                      <span className="date">
                        {new Date(rating.createdAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
