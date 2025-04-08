import React, { useContext, useState } from 'react';
import { PromptContext } from '../../context/PromptContext';
import { PromptCard } from '../../components/prompt-card/PromptCard';
import { TrendingUp, Filter, Star } from 'lucide-react';
import './popularPage.css';

export function PopularPage() {
  const { popularPrompts } = useContext(PromptContext);
  const [sortBy, setSortBy] = useState('views');
  const [filterRating, setFilterRating] = useState(0);

  const sortedPrompts = [...popularPrompts].sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return (b.views || 0) - (a.views || 0);
      case 'rating':
        return (b.avgRating || 0) - (a.avgRating || 0);
      case 'likes':
        return (b.likes || 0) - (a.likes || 0);
      default:
        return 0;
    }
  }).filter(prompt => {
    return (prompt.avgRating || 0) >= filterRating;
  });

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleRatingFilter = (rating) => {
    setFilterRating(rating);
  };

  return (
    <div className="popular-container">
      <div className="page-header">
        <div className="header-content">
          <TrendingUp size={24} className="header-icon" />
          <h1>Prompts Populares</h1>
          <p>Descubre los prompts más valorados por nuestra comunidad</p>
        </div>
      </div>

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="sortBy">
            <Filter size={16} />
            Ordenar por:
          </label>
          <select 
            id="sortBy" 
            value={sortBy} 
            onChange={handleSortChange}
            className="filter-select"
          >
            <option value="views">Más vistos</option>
            <option value="rating">Mejor valorados</option>
            <option value="likes">Más likes</option>
          </select>
        </div>

        <div className="filter-group">
          <label>
            <Star size={16} />
            Valoración mínima:
          </label>
          <div className="rating-filters">
            {[0, 3, 4, 4.5].map((rating) => (
              <button
                key={rating}
                className={`rating-filter ${filterRating === rating ? 'active' : ''}`}
                onClick={() => handleRatingFilter(rating)}
              >
                {rating === 0 ? 'Todos' : `${rating}+`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="prompts-grid">
        {sortedPrompts.length > 0 ? (
          sortedPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron prompts con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
} 