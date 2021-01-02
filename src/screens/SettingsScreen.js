import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: white;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const SettingsScreen = () => (
  <Container>
    <Text>준비중입니다!</Text>
  </Container>
);

export default SettingsScreen;
