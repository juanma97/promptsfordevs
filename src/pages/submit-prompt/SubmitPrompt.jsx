import { useState, useContext } from 'react';
import { PromptContext } from '../../context/PromptContext';
import { X } from 'lucide-react';
import { Button } from '../../components/button/Button';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { useLocation } from 'wouter';
import "./submitPrompt.css";

export function SubmitPrompt() {
  const [_, navigate] = useLocation();  
  const { addPrompt } = useContext(PromptContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    tags: [],
  });
  const [tagInput, setTagInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !formData.tags.includes(newTag)) {
        setFormData({ ...formData, tags: [...formData.tags, newTag] });
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.content || !formData.category) return;

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error("Usuario no autenticado");
      return;
    }

    const newPrompt = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      content: formData.content,
      category: formData.category,
      tags: formData.tags,
      author: user.displayName || user.email,
      avgRating: 0,
      reviews: {},
      createdAt: new Date().toISOString()
    };

    try {
      const result = await addDoc(collection(db, "prompts"), newPrompt);
      console.log("Result: ", result);
      addPrompt(newPrompt);
      navigate('/');
    } catch (error) {
      console.error("Error al guardar el prompt en Firebase: ", error);
    }
  };

  return (
    <div className="container submit-container">
      <h1 className="title">Crear un nuevo Prompt</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Título:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>

        <label>
          Descripción:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>

        <label>
          Prompt:
          <textarea name="content" value={formData.content} onChange={handleChange} required />
        </label>

        <label>
          Categoría:
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </label>

        <label>
          Tags:
          <div className="tags-input-container">
            {formData.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="remove-tag">
                  <X size={14} />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={handleTagChange}
              onKeyDown={handleKeyDown}
              placeholder="Añadir tag..."
            />
          </div>
        </label>

        <Button type="submit" disabled={!formData.title || !formData.description || !formData.content || !formData.category}>
          Crear Prompt
        </Button>
      </form>
    </div>
  );
}
