import React from 'react';
import ReceivedSignals from '../screens/ReceivedSignals';
import SentSignals from '../screens/SentSignals';
import MatchedFriendsScreen from '../screens/MatchedFriendsScreen';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SignalTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
          elevation: 0,
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        },
        indicatorStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          height: 50,
        },
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen name="보낸 시그널" component={SentSignals} />
      <Tab.Screen name="받은 시그널" component={ReceivedSignals} />
      <Tab.Screen name="서로 호감" component={MatchedFriendsScreen} />
    </Tab.Navigator>
  );
};

export default SignalTab;
