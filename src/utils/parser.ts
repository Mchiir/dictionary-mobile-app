import { RawDictionaryEntry, ParsedWordData } from '../types/dictionary';

/**
 * Defensively parses the raw API response to extract valid UI display properties.
 * Extracts the first viable phonetic text and functional audio string.
 */
export const parseDictionaryResponse = (data: RawDictionaryEntry[]): ParsedWordData => {
  if (!data || data.length === 0) {
    throw new Error('Empty response payload received');
  }

  const primaryEntry = data[0];
  
  // Find the first non-empty phonetic text reference
  let verifiedPhonetic = primaryEntry.phonetic || '';
  if (!verifiedPhonetic && primaryEntry.phonetics) {
    const foundPhonetic = primaryEntry.phonetics.find(p => p.text);
    if (foundPhonetic?.text) verifiedPhonetic = foundPhonetic.text;
  }

  // Find the first valid, fully qualified MP3 audio link available
  let verifiedAudioUrl: string | null = null;
  if (primaryEntry.phonetics) {
    const foundAudio = primaryEntry.phonetics.find(p => p.audio && p.audio.endsWith('.mp3'));
    if (foundAudio?.audio) verifiedAudioUrl = foundAudio.audio;
  }

  return {
    word: primaryEntry.word || 'Unknown Word',
    phonetic: verifiedPhonetic,
    audioUrl: verifiedAudioUrl,
    meanings: primaryEntry.meanings || [],
  };
};