import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleSearchPress = () => {
    navigation.navigate('SearchComponent');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>  Bienvenue sur notre application </Text>
      <Image source={require('./image/logores.jpg')} style={styles.image} />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
        <Text style={styles.searchButtonText}>Recherche</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});