import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  height: 80px;
  flex-direction: row;
  margin: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const TxtView = styled.View`
  margin-left: 20px;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
`;

const NameText = styled.Text`
  color: white;
  font-size: 20px;
`;

const PhoneText = styled.Text`
  color: white;
  font-size: 12px;
`;

const Contact = (props) => {
  return (
    <>
      <Container onPress={props.onPress}>
        <TxtView>
          <NameText>{props.name}</NameText>
          <PhoneText>{props.phone}</PhoneText>
        </TxtView>
      </Container>
    </>
  );
};

export default Contact;
