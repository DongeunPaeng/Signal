import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Alert} from 'react-native';

import Users from '../stores/Users';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ReceiverView = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const NameTxt = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
`;

const PhoneTxt = styled.Text`
  font-size: 15px;
`;

const MessageView = styled.View`
  height: 150px;
  align-items: center;
  padding: 30px;
`;

const MessageDesc = styled.Text`
  align-self: flex-start;
  color: #333;
`;

const SubMessageDesc = styled.Text`
  align-self: flex-start;
  font-size: 12px;
  margin-bottom: 20px;
  color: #999;
`;

const MessageInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid tomato;
  border-radius: 5px;
  padding: 10px;
`;

const BtnView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  align-self: center;
  width: 150px;
  height: 50px;
  background-color: tomato;
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 17px;
`;

const SendSignalScreen = (props) => {
  const [msg, setMsg] = useState('');
  const handleTextChange = (txt) => {
    setMsg(txt);
  };
  const sendSignal = async () => {
    if (!msg) {
      alert('메시지를 입력해주세요.');
      return;
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'bearer ' + Users.token,
      },
      body: JSON.stringify({
        receiverName: props.route.params.name,
        receiverPhone: props.route.params.phone,
        msg,
      }),
    };
    fetch('http://10.0.2.2:3000/api/users/send-signal', fetchOptions)
      .then(async(res) => {
        if (res.status !== 200) {
          alert('서버에서 답이 이상하게 왔어요.');
        } else {
          Alert.alert('발송 완료', '문자가 전송되었습니다.', [
            {
              text: '확인',
              onPress: () =>
                props.navigation.reset({index: 0, routes: [{name: 'Home'}]}),
            },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <ReceiverView>
        <NameTxt>{props.route.params.name}</NameTxt>
        <PhoneTxt>{props.route.params.phone}</PhoneTxt>
      </ReceiverView>
      <MessageView>
        <MessageDesc>
          수신자에게 보낼 메시지를 20자 이내로 입력해주세요.
        </MessageDesc>
        <SubMessageDesc>
          *수신자가 비회원일 경우, 문자로 시그널이 보내집니다.
        </SubMessageDesc>
        <MessageInput onChangeText={handleTextChange} />
      </MessageView>
      <BtnView>
        <Button onPress={sendSignal}>
          <ButtonText>시그널 전송</ButtonText>
        </Button>
      </BtnView>
    </Container>
  );
};

export default SendSignalScreen;
