import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientWrapper = ({children}) => (
  <LinearGradient
    colors={['#ff0f7b', '#f89b29']}
    style={{
      flex: 1,
    }}>
    {children}
  </LinearGradient>
);

export default LinearGradientWrapper;
