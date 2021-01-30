import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import RootNavigator from './src/navigators/RootNavigator';

const mainTheme = {
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
    <SafeAreaView
      style={{flex: 1, width: '100%', backgroundColor: 'transparent'}}>
      <LinearGradient
        colors={['#ff0f7b', '#f89b29']}
        style={{
          flex: 1,
        }}>
        <NavigationContainer theme={mainTheme}>
          <RootNavigator />
        </NavigationContainer>
      </LinearGradient>
    </SafeAreaView>
  </>
);

export default App;
