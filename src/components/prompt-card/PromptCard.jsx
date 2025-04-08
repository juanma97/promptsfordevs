import React, { useContext } from 'react';
import { Link } from 'wouter';
import { PromptContext } from '../../context/PromptContext';
import { Eye, Heart, Star } from 'lucide-react';
import './promptCard.css';

export function PromptCard({ prompt }) {
  const { setSelectedPrompt } = useContext(PromptContext);

  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return sum / ratings.length;
  }
  

  const handleClick = () => {
    setSelectedPrompt(prompt);
  };

  return (
    <div className="prompt-card">
      <Link href={`/prompt/${prompt.id}`} className="card-link" onClick={handleClick}>
        <div className="card-content">
          <div className="card-header">
            <div>
              <h2 className="card-title">{prompt.title}</h2>
              <p className="card-description">{prompt.description}</p>
            </div>
            {prompt.isFeatured && (
              <div className="featured-badge">
                <Star size={14} />
                Destacado
              </div>
            )}
          </div>

          <div className="tags-container">
            {prompt.tags?.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="card-footer">
            <div className="stats">
              <div className="stat">
                <Eye size={14} />
                <span>{prompt.views || 0}</span>
              </div>
              <div className="stat">
                <Heart size={14} />
                <span>{prompt.likes || 0}</span>
              </div>
              <div className="stat">
                <Star size={14} />
                <span>{calculateAverageRating(prompt.ratings).toFixed(1)}</span>
              </div>
            </div>
            <span className={prompt.isPaid ? 'badge premium' : 'badge free'}>
              {prompt.isPaid ? 'Premium' : 'Free'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
