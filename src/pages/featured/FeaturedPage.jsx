import React, { useContext } from 'react';
import { PromptContext } from '../../context/PromptContext';
import { PromptCard } from '../../components/prompt-card/PromptCard';
import { Star } from 'lucide-react';
import './featuredPage.css';

export function FeaturedPage() {
  const { featuredPrompts } = useContext(PromptContext);

  return (
    <div className="featured-container">
      <div className="page-header">
        <div className="header-content">
          <Star size={32} className="header-icon" />
          <h1>Prompts Destacados</h1>
          <p>Descubre los prompts más destacados seleccionados por nuestra comunidad</p>
        </div>
      </div>

      <div className="prompts-grid">
        {featuredPrompts.length > 0 ? (
          featuredPrompts.map((prompt) => (
            <div key={prompt.id} className="featured-card-wrapper">
              <PromptCard prompt={prompt} />
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No hay prompts destacados en este momento.</p>
          </div>
        )}
      </div>
    </div>
  );
} 