import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterCompleteScreen from '../screens/RegisterCompleteScreen';

import Users from '../stores/Users';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Login = (props) => {
  const initUser = async () => {
    const user = await AsyncStorage.getItem('user');
    try {
      if (user) {
        const userObj = JSON.parse(user);
        if (!userObj.token) return;
        Users.setUser(userObj.token, userObj.name, userObj.phone);
        props.navigation.reset({index: 0, routes: [{name: 'Main'}]});
      } else {
        console.log('no user from storage');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initUser();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: '로그인'}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{title: '회원가입'}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{title: '회원가입'}}
        name="RegisterCompleteScreen"
        component={RegisterCompleteScreen}
      />
    </Stack.Navigator>
  );
};

export default Login;
