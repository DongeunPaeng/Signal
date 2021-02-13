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

const RegStatus = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const RegStatusText = styled.Text`
  font-weight: bold;
  color: white;
  margin-right: 20px;
`;

const Contact = (props) => {
  return (
    <>
      <Container onPress={props.onPress}>
        <Ionicons
          size={40}
          style={{alignSelf: 'center', marginLeft: 15}}
          name="person-circle"
          color="white"
        />
        <TxtView>
          <NameText>{props.name}</NameText>
          <PhoneText>{props.phone}</PhoneText>
        </TxtView>
        <RegStatus>
          <RegStatusText>{props.existing ? '가입 중' : ''}</RegStatusText>
        </RegStatus>
      </Container>
    </>
  );
};

export default Contact;
