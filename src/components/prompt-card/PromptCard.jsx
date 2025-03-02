import React, { useContext } from 'react';
import { Link } from 'wouter';
import { PromptContext } from '../../context/PromptContext';
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
          </div>

          <div className="tags-container">
            {prompt.tags?.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="card-footer">
            <div className="rating">
              <span className="rating-text">⭐ {calculateAverageRating(prompt.ratings)}</span>
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
