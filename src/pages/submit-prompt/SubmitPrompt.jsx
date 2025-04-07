import { useState, useContext } from 'react';
import { PromptContext } from '../../context/PromptContext';
import { X, CheckCircle } from 'lucide-react';
import { Button } from '../../components/button/Button';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { useLocation } from 'wouter';
import "./submitPrompt.css";

const MAX_TITLE_LENGTH = 80;
const MAX_DESCRIPTION_LENGTH = 140;

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
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido';
    } else if (formData.title.length > MAX_TITLE_LENGTH) {
      newErrors.title = `El título no puede exceder ${MAX_TITLE_LENGTH} caracteres`;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    } else if (formData.description.length > MAX_DESCRIPTION_LENGTH) {
      newErrors.description = `La descripción no puede exceder ${MAX_DESCRIPTION_LENGTH} caracteres`;
    }

    if (!formData.content.trim()) {
      newErrors.content = 'El prompt es requerido';
    }

    if (!formData.category.trim()) {
      newErrors.category = 'La categoría es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
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
    if (!validateForm()) return;

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error("Usuario no autenticado");
      return;
    }

    const newPrompt = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      content: formData.content.trim(),
      category: formData.category.trim(),
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
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error al guardar el prompt en Firebase: ", error);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  return (
    <div className="container submit-container">
      <h1 className="title">Crear un nuevo Prompt</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title">
            Título
            <span className="character-count">
              {formData.title.length}/{MAX_TITLE_LENGTH}
            </span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            maxLength={MAX_TITLE_LENGTH}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <div className="error-message">{errors.title}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="description">
            Descripción
            <span className="character-count">
              {formData.description.length}/{MAX_DESCRIPTION_LENGTH}
            </span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength={MAX_DESCRIPTION_LENGTH}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <div className="error-message">{errors.description}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="content">Prompt</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={errors.content ? 'error' : ''}
          />
          {errors.content && <div className="error-message">{errors.content}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Selecciona una categoría</option>
            <option value="development">Development</option>
            <option value="testing">Testing</option>
            <option value="design">Design</option>
            <option value="productivity">Productivity</option>
          </select>
          {errors.category && <div className="error-message">{errors.category}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags</label>
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
        </div>

        <Button 
          type="submit" 
          className="submit-button"
          disabled={!formData.title || !formData.description || !formData.content || !formData.category}
        >
          Crear Prompt
        </Button>
      </form>

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">
              <CheckCircle size={48} color="#10b981" />
            </div>
            <h2 className="modal-title">¡Prompt creado con éxito!</h2>
            <p className="modal-message">Tu prompt ha sido publicado correctamente.</p>
            <Button 
              className="modal-button"
              onClick={handleCloseModal}
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
