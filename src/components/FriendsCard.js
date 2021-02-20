import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin: 10px 10px 10px 10px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-direction: row;
`;

const MsgContainer = styled.View``;

const FriendsText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const MsgText = styled.Text`
  color: white;
  font-size: 14px;
`;

const FriendsCard = ({name, phone}) => (
  <Container>
    <MsgContainer>
      <FriendsText>{name}</FriendsText>
      <MsgText>{phone}</MsgText>
    </MsgContainer>
  </Container>
);

export default FriendsCard;
