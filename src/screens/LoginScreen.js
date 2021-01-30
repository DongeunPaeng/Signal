import React, {useState} from 'react';
import styled from 'styled-components/native';

import Users from '../stores/Users';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: white;
  margin-bottom: 20px;
  elevation: 50;
`;

const Button = styled.TouchableOpacity`
  align-self: center;
  width: 150px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  elevation: 30;
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const TransparentButton = styled.TouchableOpacity`
  align-self: center;
`;

const ClickableText = styled.Text`
  color: white;
  margin-top: 10px;
`;

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (txt) => {
    setEmail(txt);
  };

  const handlePasswordChange = (txt) => {
    setPassword(txt);
  };

  const login = () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    fetch('https://heartsignal.dev/api/users/login', fetchOptions)
      .then(async (res) => {
        const data = await res.json();
        if (res.status !== 200) {
          alert(data.msg);
          return;
        }
        Users.setUser(data.token, data.name, data.phone);
        props.navigation.reset({index: 0, routes: [{name: 'Main'}]});
      })
      .catch((err) => {
        alert('서버에서 답을 받아오지 못했어요.');
        console.log(err);
      });
  };

  return (
    <LinearGradientWrapper>
      <Container>
        <Text>이메일</Text>
        <TextInput
          color="white"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          placeholder="이메일 입력"
          onChangeText={handleEmailChange}
          autoCapitalize="none"
        />
        <Text>비밀번호</Text>
        <TextInput
          color="white"
          placeholder="비밀번호 입력"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button onPress={login}>
          <ButtonText>로그인</ButtonText>
        </Button>
        <TransparentButton
          onPress={() => props.navigation.navigate('RegisterScreen')}>
          <ClickableText>아직 계정이 없으신가요?</ClickableText>
        </TransparentButton>
      </Container>
    </LinearGradientWrapper>
  );
};

export default LoginScreen;
