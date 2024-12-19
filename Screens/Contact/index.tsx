import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
  return <View style={styles.conatiner}>
    <Text style={styles.title}>Contact</Text>
  </View>;
};

export default Contact;

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
