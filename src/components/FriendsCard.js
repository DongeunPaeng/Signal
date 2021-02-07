import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin: 20px 10px 0px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  height: 80px;
  justify-content: center;
  padding: 10px;
`;

const MsgText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const FriendsCard = ({name, phone}) => (
  <Container>
    <MsgText>{name}</MsgText>
    <MsgText>{phone}</MsgText>
  </Container>
);

export default FriendsCard;
