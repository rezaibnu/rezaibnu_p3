import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ShoeItem from '../components/ShoeItem';

const ShoeListScreen = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = () => {
      setShoes([
        {
          id: '1',
          name: 'LV Trainer Maxi Sneaker',
          price: 100,
          releaseYear: 2023,
          image: require('../assets/LV Trainer Maxi Sneaker.jpg'),
        },
        {
          id: '2',
          name: 'LV Trainer Maxi Sneaker 2',
          price: 112,
          releaseYear: 2023,
          image: require('../assets/LV Trainer Maxi Sneaker2.jpg'),
        },
        {
          id: '3',
          name: 'LV Trainer Maxi Sneaker3',
          price: 100,
          releaseYear: 2024,
          image: require('../assets/LV Trainer Maxi Sneaker3.jpg'),
        },
        {
          id: '4',
          name: 'LV Trainer Maxi Sneaker4',
          price: 100,
          releaseYear: 2024,
          image: require('../assets/LV Trainer Maxi Sneaker4.jpg'),
        },
      ]);
    };
    fetchShoes();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="LOUIS VUITON" />
      <FlatList
        data={shoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShoeItem shoe={item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffaf0', // Warna putih krem mewah
    },
    listContainer: {
      paddingBottom: 20,
      paddingHorizontal: 10,
      marginTop: 10,
    },
  });
  

export default ShoeListScreen;