import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Link } from 'wouter';
import { Heart, Eye, Star } from 'lucide-react';
import { RatingStars } from '../../components/rating-stars/RatingStars';
import './profile.css';

export function Profile() {
  const { user } = useAuth();
  const [likedPrompts, setLikedPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('liked'); // 'liked', 'created', 'reviews'
  const [userStats, setUserStats] = useState({
    totalLikes: 0,
    totalReviews: 0,
    totalPrompts: 0
  });

  useEffect(() => {
    if (user) {
      fetchUserContent();
    }
  }, [user]);

  const fetchUserContent = async () => {
    try {
      setLoading(true);
      // Obtener prompts que el usuario ha dado like
      const promptsRef = collection(db, 'prompts');
      const q = query(promptsRef, where('userLikes', 'array-contains', user.uid));
      const querySnapshot = await getDocs(q);
      
      const prompts = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id
      }));

      setLikedPrompts(prompts);
      
      // Actualizar estadísticas del usuario
      setUserStats({
        totalLikes: prompts.length,
        totalReviews: 0, // Implementar si tienes reviews
        totalPrompts: 0  // Implementar si tienes prompts creados por el usuario
      });

    } catch (error) {
      console.error('Error fetching user content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div className="container">Debes iniciar sesión para ver tu perfil</div>;
  }

  if (loading) {
    return <div className="container">Cargando...</div>;
  }

  return (
    <div className="container profile">
      {/* Cabecera del perfil */}
      <div className="profile-header">
        <div className="profile-info">
          <img 
            src={user.photoURL || '/default-avatar.png'} 
            alt="Profile" 
            className="profile-avatar"
          />
          <div className="profile-details">
            <h1>{user.displayName || 'Usuario'}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <Heart size={16} />
            <span>{userStats.totalLikes} likes dados</span>
          </div>
          <div className="stat-item">
            <Star size={16} />
            <span>{userStats.totalReviews} reviews</span>
          </div>
          <div className="stat-item">
            <Eye size={16} />
            <span>{userStats.totalPrompts} prompts creados</span>
          </div>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => setActiveTab('liked')}
        >
          Prompts Favoritos
        </button>
        <button 
          className={`tab ${activeTab === 'created' ? 'active' : ''}`}
          onClick={() => setActiveTab('created')}
        >
          Mis Prompts
        </button>
        <button 
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Mis Reviews
        </button>
      </div>

      {/* Contenido según el tab activo */}
      <div className="profile-content">
        {activeTab === 'liked' && (
          <div className="prompts-grid">
            {likedPrompts.length > 0 ? (
              likedPrompts.map(prompt => (
                <Link 
                  key={prompt.docId} 
                  href={`/prompt/${prompt.id}`}
                >
                  <a className="prompt-card">
                    <h3 className="prompt-title">{prompt.title}</h3>
                    <p className="prompt-description">{prompt.description}</p>
                    <div className="prompt-footer">
                      <div className="prompt-stats">
                        <span className="stat">
                          <Heart size={14} />
                          {prompt.likes || 0}
                        </span>
                        <span className="stat">
                          <Eye size={14} />
                          {prompt.views || 0}
                        </span>
                      </div>
                      <RatingStars rating={prompt.avgRating || 0} size={14} />
                    </div>
                  </a>
                </Link>
              ))
            ) : (
              <div className="empty-state">
                <p>Aún no has dado like a ningún prompt</p>
                <Link href="/explore">
                  <a className="button">Explorar Prompts</a>
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'created' && (
          <div className="empty-state">
            <p>Próximamente podrás ver los prompts que has creado</p>
            <Link href="/create">
              <a className="button">Crear Prompt</a>
            </Link>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="empty-state">
            <p>Próximamente podrás ver tus reviews</p>
            <Link href="/explore">
              <a className="button">Explorar Prompts</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 