import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'linear-gradient(90deg, #4e54c8, #8f94fb)', // 
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    color: '#000', // Warna teks hitam elegan
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
    textShadowColor: 'rgba(255, 255, 255, 0.1)', // Bayangan putih sangat lembut untuk menambah dimensi
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1, // Radius lebih kecil untuk kesan halus
  },
  
});

export default Header;