import { useState, useCallback } from 'react';
import axios from 'axios';
import { fetchWordDetails } from '../api/dictionaryApi';
import { parseDictionaryResponse } from '../utils/parser';
import { DictionaryState } from '../types/dictionary';
import { useSearchHistory } from '../context/SearchHistoryContext';

export const useDictionary = () => {
  const [state, setState] = useState<DictionaryState>({
    wordData: null,
    loading: false,
    error: null,
  });

  const { addWordToHistory } = useSearchHistory();

  const searchWord = useCallback(async (word: string) => {
    const searchString = word.trim();
    if (!searchString) {
      setState({ wordData: null, loading: false, error: 'Please enter a word to search.' });
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const rawData = await fetchWordDetails(searchString);
      const parsedData = parseDictionaryResponse(rawData);

      setState({
        wordData: parsedData,
        loading: false,
        error: null,
      });

      // Append parsed success strings back to history stack
      addWordToHistory(parsedData.word);
    } catch (err: any) {
      let userFriendlyMessage = 'Something went wrong. Please try again.';

      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          userFriendlyMessage = 'Word not found. Try another search.';
        } else if (!err.response) {
          userFriendlyMessage = 'Unable to connect. Check your internet connection and try again.';
        }
      }

      setState({
        wordData: null,
        loading: false,
        error: userFriendlyMessage,
      });
    }
  }, [addWordToHistory]);

  return { ...state, searchWord };
};