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
  flex-direction: row;
  align-items: center;
`;

const MsgText = styled.Text`
  font-size: 20px;
`;
const SignalCard = ({content}) => {
  return (
    <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={10}>
      <Container>
        <TxtView>
          <MsgTextView>
            <MsgText>{content}</MsgText>
          </MsgTextView>
        </TxtView>
      </Container>
    </CardView>
  );
};

export default SignalCard;
