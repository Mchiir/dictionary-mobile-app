import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ParsedWordData } from '../types/dictionary';
import { AudioButton } from '../components/AudioButton';
import { MeaningCard } from '../components/MeaningCard';

interface WordDetailsScreenProps {
  data: ParsedWordData;
}

export const WordDetailsScreen: React.FC<WordDetailsScreenProps> = ({ data }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.word}>{data.word}</Text>
          {data.phonetic ? <Text style={styles.phonetic}>{data.phonetic}</Text> : null}
        </View>
        <AudioButton url={data.audioUrl} />
      </View>

      <Text style={styles.sectionTitle}>Meanings</Text>
      {data.meanings.map((meaning, index) => (
        <MeaningCard key={index} meaning={meaning} index={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  titleContainer: {
    flex: 1,
  },
  word: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1C1C1E',
    letterSpacing: 0.3,
  },
  phonetic: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 4,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 12,
    paddingLeft: 4,
  },
});