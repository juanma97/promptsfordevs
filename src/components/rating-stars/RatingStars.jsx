import React from "react";
import { Star, StarHalf } from "lucide-react";
import "./ratingStars.css";

export function RatingStars({ rating, size = 16 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} className="star full" strokeWidth={0.5} stroke={"black"}/>
      ))}
      {hasHalfStar && <StarHalf size={size} className="star half" strokeWidth={0.5} stroke={"black"}/>}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="star empty"/>
      ))}
    </div>
  );
}
