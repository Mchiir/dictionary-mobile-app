import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';

interface AudioButtonProps {
  url: string | null;
}

export const AudioButton: React.FC<AudioButtonProps> = ({ url }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  if (!url) return null;

  const playAudio = async () => {
    try {
      setIsPlaying(true);
      
      // Stop and release previous instance if any
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );

      setSound(newSound);
      
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && !status.isPlaying && status.didJustFinish) {
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.warn('Audio playback error:', error);
      setIsPlaying(false);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={playAudio} disabled={isPlaying}>
      {isPlaying ? (
        <ActivityIndicator size="small" color="#007AFF" />
      ) : (
        <Text style={styles.icon}>🔊</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E1F0FF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  icon: {
    fontSize: 18,
    color: '#007AFF',
  },
});