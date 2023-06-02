import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchComponent from './components/SearchComponent';
import RestaurantListComponent from './components/RestaurantListComponent';
import WelcomeScreen from './components/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
const Drawer = createDrawerNavigator();
 
export default function App() {
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = (results) => {
    setRestaurants(results);
  };

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Drawer.Navigator useLegacyImplementation initialRouteName="Welcome">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="SearchComponent">
              {(props) => (
                <ScrollView contentContainerStyle={styles.container}>
                  <SearchComponent onSearch={handleSearch} {...props} />
                  <RestaurantListComponent restaurants={restaurants} />
                </ScrollView>
              )}
            </Drawer.Screen>
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
       
        </View>
      </NavigationContainer>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
