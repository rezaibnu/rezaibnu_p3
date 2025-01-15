import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Animated,
} from 'react-native';

const ShoeItem = ({ shoe }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePress = () => {
    const websiteUrl = getShoeWebsite(shoe.id);
    Linking.openURL(websiteUrl);
  };

  const getShoeWebsite = (shoeId) => {
    const websites = {
      '1': 'https://id.louisvuitton.com/eng-id/products/lv-trainer-maxi-sneaker-nvprod5520053v/1AD7SI',
      '2': 'https://id.louisvuitton.com/eng-id/products/lv-trainer-maxi-sneaker-nvprod5370010v/1ACXK8',
      '3': 'https://id.louisvuitton.com/eng-id/products/lv-trainer-maxi-sneaker-nvprod5520052v/1AD7DT',
      '4': 'https://id.louisvuitton.com/eng-id/products/lv-trainer-maxi-sneaker-nvprod4830213v/1ACEOJ',
    };
    return websites[shoeId] || 'https://www.google.com';
  };

  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handlePress}
      style={styles.card}
    >
      <Animated.View style={[styles.imageContainer, { transform: [{ scale: scaleValue }] }]}>
        <Image source={shoe.image} style={styles.image} />
      </Animated.View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{shoe.name}</Text>
        <Text style={styles.price}>${shoe.price}</Text>
        <Text style={styles.releaseYear}>Release Year: {shoe.releaseYear}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Yeayy masuk keranjang!')}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#a0522d', // Warna coklat elegan
      borderRadius: 20,
      margin: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      elevation: 8,
      width: '45%',
      position: 'relative',
      borderColor: '#8b4513', // Border coklat gelap
      borderWidth: 1,
    },
    imageContainer: {
      width: '100%',
      height: 150,
      overflow: 'hidden',
      borderRadius: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: '#deb887', // Warna coklat muda
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    infoContainer: {
      alignItems: 'center',
    },
    name: {
      fontSize: 16,
      fontWeight: '700',
      color: '#fff8dc', // Warna putih krem
      marginBottom: 8,
    },
    price: {
      fontSize: 14,
      fontWeight: '500',
      color: '#ffd700', // Warna emas
      marginBottom: 5,
    },
    releaseYear: {
      fontSize: 12,
      color: '#fff5e1', // Warna krem muda
      marginTop: 5,
    },
    addToCartButton: {
      backgroundColor: '#8b4513', // Tombol coklat gelap
      borderRadius: 10,
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    addToCartText: {
      color: '#fff8dc', // Teks putih krem
      fontWeight: '600',
    },
  });
  

export default ShoeItem;
