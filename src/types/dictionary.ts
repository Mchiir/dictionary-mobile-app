export interface License {
  name: string;
  url: string;
}

export interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface RawDictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

// Cleaned up UI-ready model parsed defensively
export interface ParsedWordData {
  word: string;
  phonetic: string;
  audioUrl: string | null;
  meanings: Meaning[];
}

export interface DictionaryState {
  wordData: ParsedWordData | null;
  loading: boolean;
  error: string | null;
}