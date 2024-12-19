import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }: { navigation: any }) => {
  return <View style={styles.conatiner}>
    <Text style={styles.title}>Screen1</Text>
    <Button title="Go to Screen2" onPress={() => navigation.navigate('Screen2')} />
  </View>;
};

export default Screen1;

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
