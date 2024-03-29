import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../navigators/Main';
import Login from '../navigators/Login';
import Users from '../stores/Users';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <>
    <Stack.Navigator
      initialRouteName={Users.token ? 'Main' : 'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{
          cardOverlayEnabled: false,
        }}
        name="Main"
        component={Main}
      />
      <Stack.Screen
        options={{
          cardOverlayEnabled: false,
        }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  </>
);

export default RootNavigator;
