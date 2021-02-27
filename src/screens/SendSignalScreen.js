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
  font-size: 12px;
  align-self: flex-start;
  color: white;
  margin-top: 10px;
`;

const SubMessageDesc = styled.Text`
  align-self: center;
  text-align: center;
  font-size: 16px;
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
  shadow-color: black;
  shadow-opacity: 0.4;
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
  shadow-color: black;
  shadow-opacity: 0.4;
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
              onPress: () =>
                Platform.OS === 'anroid'
                  ? props.navigation.reset('MyPage')
                  : props.navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'MyPage',
                        },
                      ],
                    }),
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
          <MessageInput autoCapitalize="none" onChangeText={handleTextChange} />
          <MessageDesc>
            20자 이내로 입력해주세요.
          </MessageDesc>
        </MessageView>
        <BtnView>
          <SubMessageDesc>
            친구도 내게 문자를 보내면{'\n'}'서로 호감'에 등록됩니다.{'\n'}
            {'\n'}신고가 2회 이상 누적될 경우{'\n'}경고 없이 계정이 영구 삭제됩니다.
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
