import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export const LoadingView: React.FC = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color="#007AFF" />
    <Text style={styles.text}>Fetching definition...</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#8E8E93',
  },
});