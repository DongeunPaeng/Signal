import React from 'react';
import styled from 'styled-components/native';
import CardView from 'react-native-cardview';

const Container = styled.TouchableOpacity`
  margin: 20px 10px 10px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
`;

const TxtView = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const MsgTextView = styled.View`
  padding: 15px;
`;

const MsgText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
const SignalCard = ({location, date, to = undefined, msg}) => {
  return (
    <CardView style={{backgroundColor: 'transparent'}} cardElevation={0} cardMaxElevation={0} cornerRadius={10}>
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
