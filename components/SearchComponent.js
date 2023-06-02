import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';



export default function SearchComponent({ onSearch }) {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');

  const getAreaOptions = () => {
    if (city === 'Casablanca') {
      return ['Maarif', 'najib mahfoud'];
    } else if (city === 'el jadida') {
      return ['boulevard nakhil', 'Av. Mohamed VI', 'sidi bouzid'];
    }
    return [];
  };

  const getCategoryOptions = () => {
    if (city === 'Casablanca' && area === 'Maarif') {
      return ['seafood'];
    } else if (city === 'el jadida' && area === 'boulevard nakhil') {
      return ['fast food', 'patiserie'];
    } else if (city === 'el jadida' && area === 'Av. Mohamed VI') {
      return ['fast food', 'sushi'];
    } else if (city === 'el jadida' && area === 'sidi bouzid') {
      return ['café'];
    } else if (city === 'Casablanca' && area === 'najib mahfoud') {
      return ['sushi'];
    }
    return [];
  };

  const handleSearch = () => {
      const staticResults = [
    { id: 1, name: 'Maison Eric', ville: 'el jadida', zone: 'boulevard nakhil', category: 'fast food', latitude: 33.243677818280595, longitude: -8.496846551256423, image: require('./image/eric.jpg') },
    { id: 2, name: 'Ruban dOr', ville: 'el jadida', zone: 'boulevard nakhil', category: 'patiserie', latitude: 33.24288010707976, longitude: -8.497417667540107, image: require('./image/ruban.jpg') },
    { id: 3, name: 'Araucaria', ville: 'el jadida', zone: 'Av. Mohamed VI', category: 'fast food', latitude: 33.24766816913023, longitude: -8.497537388910608, image: require('./image/araucaria.jpg') },
    { id: 4, name: 'Bahri', ville: 'el jadida', zone: 'ibis', category: 'Seafood', latitude: 33.25487078025928, longitude: -8.503150198416922, image: require('./image/bahri.jpeg') },
    { id: 5, name: 'ÔChef Maârif', ville: 'Casablanca', zone: 'maarif', category: 'seafood', latitude: 33.58251289739959, longitude:  -7.638457414030506, image: require('./image/ochef.jpg') },

    { id: 6, name: 'Arome Sushi & Wok', ville: 'Casablanca', zone: 'najib mahfoud', latitude: 33.60058049075702, longitude:  -7.648717417725041, category: 'sushi', image: require('./image/sushi.jpg') },

    { id: 7, name: 'ebi sushi', ville: 'el jadida', zone: 'Av. Mohamed VI', category: 'sushi', latitude: 33.245672820231675, longitude: -8.495692460446135, image: require('./image/ebi_sushi.jpg') },

    { id: 8, name: 'laplage', ville: 'el jadida', zone: 'sidi bouzid', category: 'café', latitude: 33.22067282899365, longitude: -8.559970748800835, image: require('./image/laplage.jpg') },
  ];

    const filteredResults = staticResults.filter(
      (restaurant) =>
        restaurant.ville.toLowerCase() === city.toLowerCase() &&
        restaurant.zone.toLowerCase() === area.toLowerCase() &&
        restaurant.category.toLowerCase() === category.toLowerCase()
    );

    onSearch(filteredResults);
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.input}
        selectedValue={city}
        onValueChange={(value) => {
          setCity(value);
          setArea('');
          setCategory('');
        }}
      >
        <Picker.Item label="Ville" value="" />
        <Picker.Item label="Casablanca" value="Casablanca" />
        <Picker.Item label="el jadida" value="el jadida" />
      </Picker>
      <Picker
        style={styles.input}
        selectedValue={area}
        onValueChange={(value) => {
          setArea(value);
          setCategory('');
        }}
      >
        <Picker.Item label="Zone" value="" />
        {getAreaOptions().map((option) => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
      <Picker
        style={styles.input}
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
      >
        <Picker.Item label="Catégorie" value="" />
        {getCategoryOptions().map((option) => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
      <Button title="Rechercher" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});