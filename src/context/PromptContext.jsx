import React, { createContext, useState } from 'react';

export const PromptContext = createContext();

export function PromptProvider({ children }) {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  return (
    <PromptContext.Provider value={{ selectedPrompt, setSelectedPrompt }}>
      {children}
    </PromptContext.Provider>
  );
}
