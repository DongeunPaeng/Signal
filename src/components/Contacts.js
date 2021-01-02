import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  height: 80px;
  flex-direction: row;
  margin: 10px;
`

const IconView = styled.View`
  width: 100px;
  justify-content: center;
  align-items: center;
`

const TxtView = styled.View`
  flex: 1;
  justify-content: flex-start;
`

const NameText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`

const PhoneText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`

const Line = styled.View`
  width: 100%;
  border-bottom-color: #333;
  border-bottom-width: 1px;
`

const Contact = (props) => {
  return (
    <>
    <Container onPress={props.onPress}>
      <IconView>
        <Ionicons name="call" size={20} color="tomato" />
      </IconView>
      <TxtView>
        <NameText>{props.name}</NameText>
        <PhoneText>{props.phone}</PhoneText>
      </TxtView>
    </Container>
    <Line />
    </>
  )
}

export default Contact;
