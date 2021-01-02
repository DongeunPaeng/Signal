import React from 'react';
import ReceivedSignals from '../screens/ReceivedSignals';
import SentSignals from '../screens/SentSignals';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SignalTab = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      indicatorStyle: {
        backgroundColor: 'tomato'
    }}}>
      <Tab.Screen name="보낸 시그널" component={SentSignals}/>
      <Tab.Screen name="받은 시그널" component={ReceivedSignals}/>
    </Tab.Navigator>
  )
}

export default SignalTab;
