import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SearchHistoryProvider } from './src/context/SearchHistoryContext';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SearchHistoryProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <DrawerNavigator />
      </NavigationContainer>
    </SearchHistoryProvider>
  );
}