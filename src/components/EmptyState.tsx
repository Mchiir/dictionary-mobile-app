import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const EmptyState: React.FC = () => (
  <View style={styles.center}>
    <Text style={styles.icon}>📖</Text>
    <Text style={styles.title}>Search for a Word</Text>
    <Text style={styles.subtitle}>Definitions, phonetics, and speech audio parts will load here.</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  icon: {
    fontSize: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
  },
});