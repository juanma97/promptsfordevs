import React from "react";
import { Link } from "wouter";
import "./promptCard.css";

export function PromptCard({ prompt, avgRating = 0 }) {
  return (
    <div className="prompt-card">
      <Link href={`/prompt/${prompt.id}`} className="card-link">
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
              <span className="rating-text">⭐ {avgRating.toFixed(1)}</span>
            </div>
            <span className={prompt.isPaid ? "badge premium" : "badge free"}>
              {prompt.isPaid ? "Premium" : "Free"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
