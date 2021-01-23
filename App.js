import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import RootNavigator from './src/navigators/RootNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => (
  <>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
    <LinearGradient
      style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      colors={['#ff0f7b', '#f89b29']}>
      <SafeAreaView
        style={{flex: 1, width: '100%', backgroundColor: 'transparent'}}>
        <NavigationContainer theme={MyTheme}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </LinearGradient>
  </>
);

export default App;
