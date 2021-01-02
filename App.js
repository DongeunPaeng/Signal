import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './src/navigators/RootNavigator';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  </>
);

export default App;
