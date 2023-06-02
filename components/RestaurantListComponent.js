import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default function RestaurantListComponent({ restaurants }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleOpenMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.restaurantItem}
          onPress={() => handleRestaurantPress(restaurant)}
        >
          <Image source={restaurant.image} style={styles.restaurantImage} />
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
            <Text style={styles.restaurantCategory}>{restaurant.category}</Text>
            <TouchableOpacity
              style={styles.mapButton}
              onPress={() => handleOpenMaps(restaurant.latitude, restaurant.longitude)}
            >
              <Text style={styles.mapButtonText}>Voir sur Google Maps</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
      {selectedRestaurant && (
        <RestaurantDetailsComponent
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </View>
  );
}

const RestaurantDetailsComponent = ({ restaurant, onClose }) => {
  return (
    <View style={styles.restaurantDetailsContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={restaurant.image} style={styles.restaurantDetailsImage} />
      <Text style={styles.restaurantDetailsName}>{restaurant.name}</Text>
      <Text style={styles.restaurantDetailsAddress}>{restaurant.address}</Text>
      <Text style={styles.restaurantDetailsCategory}>{restaurant.category}</Text>
      {/* Afficher d'autres informations détaillées du restaurant ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'cover',
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    color: 'gray',
  },
  restaurantCategory: {
    fontStyle: 'italic',
  },
  mapButton: {
    marginTop: 10,
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
  },
  mapButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  restaurantDetailsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  restaurantDetailsImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  restaurantDetailsName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  restaurantDetailsAddress: {
    color: 'gray',
    marginBottom: 10,
  },
  restaurantDetailsCategory: {
    fontStyle: 'italic',
    marginBottom: 20,
  },
});
