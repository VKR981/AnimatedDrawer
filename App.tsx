/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Drawer from './CustomDrawer/Drawer';
import { NavigationContainer } from '@react-navigation/native';



function App(): React.JSX.Element {


  return (

          <View style={styles.container}>
            <StatusBar hidden={true}  />
            <NavigationContainer>
              <Drawer />
            </NavigationContainer>
          </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
