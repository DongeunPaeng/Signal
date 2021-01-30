import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen';
import SendSignalScreen from '../screens/SendSignalScreen';

const Stack = createStackNavigator();

const Home = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      options={{
        cardOverlayEnabled: false,
      }}
      name="HomeScreen"
      component={HomeScreen}
    />
    <Stack.Screen
      options={{
        cardOverlayEnabled: false,
      }}
      name="ContactsScreen"
      component={ContactsScreen}
    />
    <Stack.Screen
      options={{
        cardOverlayEnabled: false,
      }}
      name="SendSignalScreen"
      component={SendSignalScreen}
    />
  </Stack.Navigator>
);

export default Home;
