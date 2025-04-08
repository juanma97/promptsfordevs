import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export const PromptContext = createContext();

export function PromptProvider({ children }) {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [prompts, setPrompts] = useState([]);
  const [featuredPrompts, setFeaturedPrompts] = useState([]);
  const [popularPrompts, setPopularPrompts] = useState([]);

  const addPrompt = (newPrompt) => {
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
  };

  const fetchFeaturedPrompts = async () => {
    try {
      const q = query(
        collection(db, "prompts"),
        orderBy("isFeatured", "desc"),
        limit(6)
      );
      const querySnapshot = await getDocs(q);
      const featured = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeaturedPrompts(featured);
    } catch (error) {
      console.error("Error fetching featured prompts:", error);
    }
  };

  const fetchPopularPrompts = async () => {
    try {
      const q = query(
        collection(db, "prompts"),
        orderBy("popularityScore", "desc"),
        limit(6)
      );
      const querySnapshot = await getDocs(q);
      const popular = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPopularPrompts(popular);
    } catch (error) {
      console.error("Error fetching popular prompts:", error);
    }
  };

  useEffect(() => {
    fetchFeaturedPrompts();
    fetchPopularPrompts();
  }, []);

  return (
    <PromptContext.Provider 
      value={{ 
        selectedPrompt, 
        setSelectedPrompt, 
        prompts, 
        addPrompt,
        featuredPrompts,
        popularPrompts,
        fetchFeaturedPrompts,
        fetchPopularPrompts
      }}
    >
      {children}
    </PromptContext.Provider>
  );
}
