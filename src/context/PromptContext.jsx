import React, { createContext, useState } from 'react';

export const PromptContext = createContext();

export function PromptProvider({ children }) {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [prompts, setPrompts] = useState([]);

  const addPrompt = (newPrompt) => {
    setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
  };

  return (
    <PromptContext.Provider value={{ selectedPrompt, setSelectedPrompt, prompts, addPrompt }}>
      {children}
    </PromptContext.Provider>
  );
}
