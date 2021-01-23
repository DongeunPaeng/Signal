import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MySignalScreen from '../screens/MySignalScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const MyPage = (props) => {
  const handleSettingsClick = () => {
    props.navigation.navigate('SettingsScreen');
  };
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Ionicons
              size={20}
              style={{marginRight: 15}}
              name="settings"
              color="white"
              onPress={handleSettingsClick}
            />
          ),
        }}
        name="MySignalScreen"
        component={MySignalScreen}
      />
      <Stack.Screen
        options={{
          title: '설정',
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default MyPage;
