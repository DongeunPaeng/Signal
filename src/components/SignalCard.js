import React from 'react';
import styled from 'styled-components/native';
import CardView from 'react-native-cardview';

const Container = styled.TouchableOpacity`
  height: 80px;
  flex-direction: row;
  margin: 15px 15px 0 15px;
  background-color: white;
`;
const TxtView = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const MsgTextView = styled.View`
  margin-top: 10px;
  flex-direction: column;
  align-items: flex-start;
`;

const MsgText = styled.Text`
  font-size: 14px;
`;
const SignalCard = ({location, date, to = undefined, msg}) => {
  return (
    <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
      <Container>
        <TxtView>
          <MsgTextView>
            <MsgText>{location} 날짜: {date}</MsgText>
            <MsgText>{location} 문자: {msg}</MsgText>
            {to && <MsgText>받은 사람: {to}</MsgText>}
          </MsgTextView>
        </TxtView>
      </Container>
    </CardView>
  );
};

export default SignalCard;
