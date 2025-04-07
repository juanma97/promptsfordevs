import React, { useState } from "react";
import { Star, StarHalf } from "lucide-react";
import "./ratingStars.css";

export function RatingStars({ rating, size = 16, onRate }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const displayRating = isHovering ? hoverRating : rating;
  const fullStars = Math.floor(displayRating);
  const hasHalfStar = displayRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const handleStarClick = (index) => {
    if (onRate) {
      onRate(index + 1);
    }
  };

  const handleStarHover = (index) => {
    if (onRate) {
      setHoverRating(index + 1);
      setIsHovering(true);
    }
  };

  return (
    <div 
      className="rating-stars"
      onMouseLeave={() => setIsHovering(false)}
    >
      {[...Array(fullStars)].map((_, i) => (
        <Star 
          key={`full-${i}`} 
          size={size} 
          className="star full" 
          strokeWidth={0.5} 
          stroke={"black"}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          style={{ cursor: onRate ? 'pointer' : 'default' }}
        />
      ))}
      {hasHalfStar && (
        <div className="half-star-container" style={{ 
          position: 'relative', 
          display: 'inline-block',
          lineHeight: 0
        }}>
          <Star 
            size={size} 
            className="star empty"
            strokeWidth={0.5} 
            stroke={"black"}
            onClick={() => handleStarClick(fullStars)}
            onMouseEnter={() => handleStarHover(fullStars)}
            style={{ cursor: onRate ? 'pointer' : 'default' }}
          />
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: 0, 
            transform: 'translateY(-50%)',
            overflow: 'hidden', 
            width: '50%',
            height: size
          }}>
            <Star 
              size={size} 
              className="star full" 
              strokeWidth={0.5} 
              stroke={"black"}
              onClick={() => handleStarClick(fullStars)}
              onMouseEnter={() => handleStarHover(fullStars)}
              style={{ cursor: onRate ? 'pointer' : 'default' }}
            />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star 
          key={`empty-${i}`} 
          size={size} 
          className="star empty"
          onClick={() => handleStarClick(fullStars + (hasHalfStar ? 1 : 0) + i)}
          onMouseEnter={() => handleStarHover(fullStars + (hasHalfStar ? 1 : 0) + i)}
          style={{ cursor: onRate ? 'pointer' : 'default' }}
        />
      ))}
    </div>
  );
}
