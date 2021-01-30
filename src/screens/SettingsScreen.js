import React from 'react';
import styled from 'styled-components/native';

import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Text = styled.Text`
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
`;

const SettingsScreen = () => (
  <LinearGradientWrapper>
    <Container>
      <Text>준비중입니다!</Text>
    </Container>
  </LinearGradientWrapper>
);

export default SettingsScreen;
