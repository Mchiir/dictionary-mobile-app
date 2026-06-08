import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SearchHistoryContextProps {
  history: string[];
  addWordToHistory: (word: string) => void;
  clearHistory: () => void;
}

const SearchHistoryContext = createContext<SearchHistoryContextProps | undefined>(undefined);

export const SearchHistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]);

  const addWordToHistory = (word: string) => {
    const normalized = word.trim();
    if (!normalized) return;

    setHistory((prevHistory) => {
      // Remove word if it already exists to avoid duplicates and bump to the top
      const filtered = prevHistory.filter((item) => item.toLowerCase() !== normalized.toLowerCase());
      return [normalized, ...filtered];
    });
  };

  const clearHistory = () => setHistory([]);

  return (
    <SearchHistoryContext.Provider value={{ history, addWordToHistory, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext);
  if (!context) {
    throw new Error('useSearchHistory must be used within a SearchHistoryProvider');
  }
  return context;
};