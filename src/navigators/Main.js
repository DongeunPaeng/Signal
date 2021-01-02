import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import MyPage from './MyPage';

const BottomTab = createBottomTabNavigator();

const Main = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else {
          iconName = 'person';
        }

        return (
          <Ionicons
            name={iconName}
            size={20}
            color={focused ? 'tomato' : 'gray'}
          />
        );
      },
      tabBarVisible: !(route.name === 'Login'),
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="MyPage" component={MyPage} />
  </BottomTab.Navigator>
);

export default Main;
