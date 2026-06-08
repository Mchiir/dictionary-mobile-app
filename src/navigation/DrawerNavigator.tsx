import React from 'react';
import { 
  createDrawerNavigator, 
  DrawerContentComponentProps, 
  DrawerContentScrollView, 
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { useSearchHistory } from '../context/SearchHistoryContext';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { history, clearHistory } = useSearchHistory();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.drawerTitle}>Dictionary App</Text>
      </View>

      {/* Renders default configuration view stack links */}
      <View style={{ display: 'none' }}>
        <DrawerItemList {...props} />
      </View>

      <DrawerItem
        label="🏠  Home Search"
        labelStyle={styles.homeLabel}
        onPress={() => props.navigation.navigate('Home', { searchWord: undefined })}
      />

      <View style={styles.divider} />
      <Text style={styles.sectionHeader}>Search History</Text>

      {history.length === 0 ? (
        <Text style={styles.emptyHistoryText}>No recent searches</Text>
      ) : (
        history.map((word, index) => (
          <DrawerItem
            key={`${word}-${index}`}
            label={`🕒  ${word}`}
            labelStyle={styles.historyItemLabel}
            onPress={() => {
              props.navigation.navigate('Home', { searchWord: word });
            }}
          />
        ))
      )}

      {history.length > 0 && (
        <DrawerItem
          label="🗑️ Clear History"
          labelStyle={styles.clearLabel}
          onPress={clearHistory}
          style={styles.clearButton}
        />
      )}
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF', elevation: 0, shadowOpacity: 0 },
        headerTintColor: '#007AFF',
        headerTitleStyle: { fontWeight: '600', color: '#1C1C1E' },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Search' }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20,
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    marginBottom: 10,
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  homeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginVertical: 10,
    marginHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
    paddingHorizontal: 20,
    paddingVertical: 8,
    textTransform: 'uppercase',
  },
  emptyHistoryText: {
    fontSize: 14,
    color: '#8E8E93',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontStyle: 'italic',
  },
  historyItemLabel: {
    fontSize: 15,
    color: '#3A3A3C',
    fontWeight: '500',
  },
  clearButton: {
    marginTop: 'auto',
    marginBottom: 20,
    backgroundColor: '#FFE5E5',
    borderRadius: 8,
  },
  clearLabel: {
    color: '#FF3B30',
    fontWeight: '600',
  },
});