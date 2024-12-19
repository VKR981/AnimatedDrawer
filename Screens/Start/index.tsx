import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Contact from '../Contact';
const Tab = createBottomTabNavigator();

function Start() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Contact} />
    </Tab.Navigator>
  );
}

export default React.memo(Start);
