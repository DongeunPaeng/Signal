import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './src/navigators/RootNavigator';

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LinearGradient
        colors={['#432371', '#7c419c']}
        style={{
          flex: 1,
        }}>
        <SafeAreaView style={{flex: 1, width: '100%'}}>
          <NavigationContainer theme={mainTheme}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default App;
