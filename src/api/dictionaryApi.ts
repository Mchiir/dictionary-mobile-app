import axios from 'axios';
import { API_BASE_URL } from '../constants/api';
import { RawDictionaryEntry } from '../types/dictionary';

export const fetchWordDetails = async (word: string): Promise<RawDictionaryEntry[]> => {
  const cleanWord = word.trim().toLowerCase();
  const response = await axios.get<RawDictionaryEntry[]>(`${API_BASE_URL}/${cleanWord}`, {
    timeout: 10000, // 10s Network Timeout Guard
  });
  return response.data;
};
// const response = await axios.get(
//   `${API_BASE_URL}/${encodeURIComponent(cleanWord)}`,
//   { timeout: 10000 }
// );