import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen';
import SendSignalScreen from '../screens/SendSignalScreen';

const Stack = createStackNavigator();

// TODO: 시그널 보내기 화면이 여기에 꼭 있어야 하나?
const Home = () => (
  <Stack.Navigator>
    <Stack.Screen options={{title: '홈'}} name="home" component={HomeScreen} />
    <Stack.Screen
      options={{title: '수신자 선택'}}
      name="ContactsScreen"
      component={ContactsScreen}
    />
    <Stack.Screen
      options={{title: '시그널 보내기'}}
      name="SendSignalScreen"
      component={SendSignalScreen}
    />
  </Stack.Navigator>
);

export default Home;
