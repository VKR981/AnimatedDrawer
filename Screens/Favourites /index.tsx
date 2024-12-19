import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = () => {
  return <View style={styles.conatiner}>
    <Text style={styles.title}>Favorites</Text>
  </View>;
};

export default Favorites;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      textAlign:'center',
      marginBottom: 20,
    },
    conatiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
