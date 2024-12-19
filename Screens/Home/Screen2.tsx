import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen2 = ({ navigation }: { navigation: any }) => {
  return <View style={styles.conatiner}>
    <Text style={styles.title}>Screen2</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>;
};

export default Screen2;

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
