import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin: 20px 10px 0px 10px;
  height: 80px;;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
`;

const MsgText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const SignalCard = ({location, date, to = undefined, msg}) => (
  <Container>
    <MsgText>
      {location} 날짜: {date}
    </MsgText>
    <MsgText>
      {location} 문자: {msg}
    </MsgText>
    {to && <MsgText>받은 사람: {to}</MsgText>}
  </Container>
);

export default SignalCard;
