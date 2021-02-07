import React from 'react';
import styled from 'styled-components/native';
import CardView from 'react-native-cardview';

const Container = styled.TouchableOpacity`
  margin: 20px 10px 0px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  flex: 1;
  justify-content: flex-start;
  padding: 15px;
`;

const MsgText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const SignalCard = ({location, date, to = undefined, msg}) => {
  return (
    <CardView
      style={{backgroundColor: 'green'}}
      cardElevation={0}
      cardMaxElevation={0}
      cornerRadius={10}>
      <Container>
        <MsgText>
          {location} 날짜: {date}
        </MsgText>
        <MsgText>
          {location} 문자: {msg}
        </MsgText>
        {to && <MsgText>받은 사람: {to}</MsgText>}
      </Container>
    </CardView>
  );
};

export default SignalCard;
