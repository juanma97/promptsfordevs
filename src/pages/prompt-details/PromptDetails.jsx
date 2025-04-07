import { useRoute } from 'wouter';
import { useState, useEffect, useContext } from 'react';
import { Copy, Check } from 'lucide-react';
import { RatingStars } from '../../components/rating-stars/RatingStars';
import { PromptContext } from '../../context/PromptContext';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './promptDetails.css';

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

  useEffect(() => {
    if (selectedPrompt && selectedPrompt.id === params?.id) {
      setPrompt(selectedPrompt);
      fetchReviews(selectedPrompt.id);
      setLoading(false);
    } else {
      loadPromptFromFirestore();
    }
  }, [params?.id, selectedPrompt]);

  const loadPromptFromFirestore = async () => {
    try {
      const promptDoc = doc(db, 'prompts', params?.id);
      const promptSnapshot = await getDoc(promptDoc);

      if (promptSnapshot.exists()) {
        setPrompt({ id: params?.id, ...promptSnapshot.data() });
        await fetchReviews(params?.id);
      } else {
        setPrompt(null);
      }
    } catch (error) {
      console.error('Error al cargar el prompt:', error);
    } finally {
      console.log('finally');
      setLoading(false);
    }
};


  const fetchReviews = async (promptId) => {
    try {
      const reviewsRef = collection(db, `prompts/${promptId}/reviews`);
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

  const avgRating = ratings.length ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 0;

  if (loading) {
    return <div className="container loading">Cargando...</div>;
  }

  if (!prompt) {
    return <div className="container error">Prompt no encontrado</div>;
  }

  return (
    <div className="container prompt-details">
      <h1 className="title">{prompt.title}</h1>
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
      <div className="full-content pre-container relative">
        <h2>Prompt</h2>
        <div className="prompt-container">
          <pre>{prompt.content}</pre>
          <button className="button-outline" onClick={() => copyToClipboard(prompt.content)}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      {/* Formulario para agregar una review */}
      {user && (
        <div className="add-review">
          <h2>Deja tu review</h2>
          <div className="rating-input">
            <RatingStars rating={newRating} size={24} onRate={setNewRating} />
          </div>
          <textarea
            placeholder="Escribe tu comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="button" onClick={handleSubmitReview}>
            Enviar Review
          </button>
        </div>
      )}

      {/* Sección de reviews */}
      {ratings.length > 0 && (
        <div className="reviews-container reviews">
          <h2>Reviews</h2>
          {ratings.map((rating) => (
            <div key={rating.id} className="review">
              <div className="rating flex gap-2 mb-2">
                <RatingStars rating={rating.rating} size={16} />
              </div>
              <p className="text-sm text-muted-foreground">{rating.comment}</p>
              <span className="text-xs text-gray-500">- {rating.author}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
