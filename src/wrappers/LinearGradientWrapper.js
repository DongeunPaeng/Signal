import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientWrapper = ({children}) => (
  <LinearGradient
    colors={['#432371', '#7c419c']}
    style={{
      flex: 1,
    }}>
    {children}
  </LinearGradient>
);

export default LinearGradientWrapper;
