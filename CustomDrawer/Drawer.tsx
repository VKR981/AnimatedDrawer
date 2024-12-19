import React from 'react';
import { StyleSheet, View } from 'react-native';
import Start from '../Screens/Start';
import Cart from '../Screens/Cart';
import Favorites from '../Screens/Favourites ';
import DrawerContent from './DrawerContent';
import DrawerScreen from './DrawerScreen';




const Drawer = () => {


  const screens = [
    {
      name: 'Start',
      component: Start,
    },
    {
      name: 'Cart',
      component: Cart,
    },
    {
      name: 'Favorites',
      component: Favorites,
    },
  ];

    return (
        <View style={styles.container}>
          <DrawerContent screens={screens}/>
          <DrawerScreen screens={screens}/>
        </View>
    );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
