import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Alert} from 'react-native';

import Users from '../stores/Users';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
`;

const ReceiverView = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const NameTxt = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 15px;
  color: white;
`;

const PhoneTxt = styled.Text`
  font-size: 15px;
  color: white;
`;

const MessageView = styled.View`
  height: 150px;
  align-items: center;
  padding: 30px;
`;

const MessageDesc = styled.Text`
  align-self: flex-start;
  color: white;
  margin-bottom: 20px;
`;

const SubMessageDesc = styled.Text`
  align-self: center;
  text-align: center;
  font-size: 17px;
  margin-bottom: 30px;
  color: white;
`;

const MessageInput = styled.TextInput`
  color: white;
  width: 100%;
  height: 50px;
  border: 0.3px solid white;
  border-radius: 5px;
  padding: 10px;
  background-color: 'rgba(255, 255, 255, 0.1)'
  elevation: 50;
`;

const BtnView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  align-self: center;
  width: 250px;
  height: 40px;
  background-color: 'rgba(255, 255, 255, 0.3)';
  border-radius: 25px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  elevation: 40;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
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
    fetch('https://heartsignal.dev/api/users/send-signal', fetchOptions)
      .then(async (res) => {
        if (res.status !== 200) {
          alert('서버에서 답이 이상하게 왔어요.');
        } else {
          Alert.alert('발송 완료', '문자가 전송되었습니다.', [
            {
              text: '확인',
              onPress: () => props.navigation.reset('MyPage'),
            },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LinearGradientWrapper>
      <Container>
        <ReceiverView>
          <NameTxt>{props.route.params.name}</NameTxt>
          <PhoneTxt>{props.route.params.phone}</PhoneTxt>
        </ReceiverView>
        <MessageView>
          <MessageDesc>
            수신자에게 보낼 메시지를 20자 이내로 입력해주세요.
          </MessageDesc>
          <MessageInput autoCapitalize="none" onChangeText={handleTextChange} />
        </MessageView>
        <BtnView>
          <SubMessageDesc>
            수신자도 내게 문자를 보내면{'\n'}서로의 이름이 공개됩니다.{'\n'}
            친구의 마음을 확인해보세요!
            {'\n'}
            {'\n'}3월 이후 발신 문자는{'\n'}50일 후 수신자에게 내 번호가 공개됩니다.
          </SubMessageDesc>
          <Button onPress={sendSignal}>
            <ButtonText>시그널 전송</ButtonText>
          </Button>
        </BtnView>
      </Container>
    </LinearGradientWrapper>
  );
};

export default SendSignalScreen;
