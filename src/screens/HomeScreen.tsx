import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useDictionary } from '../hooks/useDictionary';
import { SearchBar } from '../components/SearchBar';
import { LoadingView } from '../components/LoadingView';
import { ErrorView } from '../components/ErrorView';
import { EmptyState } from '../components/EmptyState';
import { WordDetailsScreen } from './WordDetailsScreen';

interface HomeScreenProps {
  route?: {
    params?: {
      searchWord?: string;
    };
  };
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
  const { wordData, loading, error, searchWord } = useDictionary();
  const [currentQuery, setCurrentQuery] = useState('');

  // Triggers search automatically when a user picks an item from the history drawer
  useEffect(() => {
    if (route?.params?.searchWord) {
      setCurrentQuery(route.params.searchWord);
      searchWord(route.params.searchWord);
    }
  }, [route?.params?.searchWord, searchWord]);

  const handleSearchExecution = (word: string) => {
    setCurrentQuery(word);
    searchWord(word);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearchExecution} initialValue={currentQuery} />
        
        <View style={styles.contentBody}>
          {loading && <LoadingView />}
          
          {!loading && error && (
            <ErrorView message={error} onRetry={() => handleSearchExecution(currentQuery)} />
          )}
          
          {!loading && !error && !wordData && <EmptyState />}
          
          {!loading && !error && wordData && (
            <WordDetailsScreen data={wordData} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentBody: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
});