import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Meaning } from '../types/dictionary';

interface MeaningCardProps {
  meaning: Meaning;
  index: number;
}

export const MeaningCard: React.FC<MeaningCardProps> = ({ meaning, index }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.partOfSpeech}>
        {index + 1}. {meaning.partOfSpeech}
      </Text>
      
      {meaning.definitions.map((def, idx) => (
        <View key={idx} style={styles.definitionContainer}>
          <Text style={styles.definitionText}>
            • {def.definition}
          </Text>
          {def.example && (
            <Text style={styles.exampleText}>
              "{def.example}"
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  partOfSpeech: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 10,
    fontStyle: 'italic',
    textTransform: 'capitalize',
  },
  definitionContainer: {
    marginBottom: 12,
  },
  definitionText: {
    fontSize: 15,
    color: '#3A3A3C',
    lineHeight: 22,
  },
  exampleText: {
    fontSize: 14,
    color: '#8E8E93',
    fontStyle: 'italic',
    marginTop: 4,
    paddingLeft: 12,
  },
});