import { useRoute } from 'wouter';
import { useState, useEffect, useContext } from 'react';
import { Copy, Check } from 'lucide-react';
import { RatingStars } from '../../components/rating-stars/RatingStars';
import { PromptContext } from '../../context/PromptContext';
import './promptDetails.css';

export function PromptDetails() {
  const [, params] = useRoute('/prompt/:id');
  const { selectedPrompt } = useContext(PromptContext);
  const [user] = useState(null);
  const [copied, setCopied] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedPrompt && selectedPrompt.id == params?.id) {
      setPrompt(selectedPrompt);
      setRatings(selectedPrompt.ratings || []);
    } else {
      setPrompt(null);
    }
    setLoading(false);
  }, [params?.id, selectedPrompt]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      alert('Failed to copy, please try again.');
    }
  };

  const avgRating = ratings.length
    ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
    : 0;

  if (loading) {
    return <div className="container loading">Loading...</div>;
  }

  if (!prompt) {
    return <div className="container error">Prompt not found</div>;
  }

  return (
    <div className="container prompt-details">
      <h1 className="title">{prompt.title}</h1>
      <div className="info flex gap-4 mb-6">
        <div className="rating-container flex gap-2">
          <RatingStars rating={avgRating} size={20} />
          <span className="text-sm text-muted-foreground">({avgRating.toFixed(1)})</span>
        </div>
        <span className="price">{prompt.isPaid ? `$${prompt.price}` : 'Free'}</span>
      </div>
      <div className="description prose">
        <h2>Description</h2>
        <p>{prompt.description}</p>
      </div>
      <div className="preview pre-container relative">
        <h2>Preview</h2>
        <pre>{prompt.preview || 'No preview available'}</pre>
        <button className="button-outline" onClick={() => copyToClipboard(prompt.preview || '')}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      {(!prompt.isPaid || user) && (
        <div className="full-content pre-container relative">
          <h2>Full Prompt</h2>
          <pre>{prompt.content}</pre>
          <button className="button-outline" onClick={() => copyToClipboard(prompt.content)}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      )}
      {ratings.length > 0 && (
        <div className="reviews-container reviews">
          <h2>Reviews</h2>
          {ratings.map((rating) => (
            <div key={rating.id} className="review">
              <div className="rating flex gap-2 mb-2">
                <RatingStars rating={rating.rating} size={16} />
              </div>
              {rating.comment && (
                <p className="text-sm text-muted-foreground">{rating.comment}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
