import React, {useState} from 'react';
import styled from 'styled-components/native';

import {validateEmail, validatePassword} from '../utils/validator';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
`;

const Message = styled.Text`
  font-weight: bold;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 20px;
  color: white;
`;

const EmailInput = styled.TextInput`
  flex: 3;
  height: 50px;
  padding-bottom: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: white;
  elevation: 50;
  shadow-color: black;
  shadow-opacity: 0.4;
`;

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
`;

const CheckButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: rgba(255, 255, 255, 0.3)
  elevation: 50;
  shadow-color: black;
  shadow-opacity: 0.4;
`;

const PasswordInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: white;
  margin-bottom: 20px;
  elevation: 50;
  shadow-color: black;
  shadow-opacity: 0.4;
`;

const Button = styled.TouchableOpacity`
  align-self: center;
  width: 150px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  elevation: 30;
  shadow-color: black;
  shadow-opacity: 0.4;
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

const CheckButtonText = styled.Text`
  font-weight: bold;
  color: white;
  text-align: center;
`;

const RegisterScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const navigateToNextScreen = () => {
    const isValidated = validatePassword(password);
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
    if (!email || !password || !passwordCheck) {
      alert('내용을 모두 입력해주세요.');
      return;
    } else if (!isDuplicateChecked) {
      alert('이메일 중복확인을 해주세요.');
      return;
    } else if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else if (!isValidated) {
      alert('8자 이상 대소문자, 숫자, 특수문자 조합으로 만들어주세요.');
      return;
    } else {
      fetch('https://heartsignal.dev/api/users/try', fetchOptions)
        .then((res) => {
          if (res.status === 200) {
            props.navigation.navigate('RegisterCompleteScreen', {
              email,
              password,
            });
          }
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    }
  };

  const checkDuplicate = () => {
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    const isValidated = validateEmail(email);
    if (!isValidated) {
      alert('형식이 올바르지 않습니다.');
      return;
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    };
    fetch('https://heartsignal.dev/api/users/check-duplicate', fetchOptions)
      .then(async (res) => {
        const data = await res.json();
        if (data.isDuplicate) {
          alert('사용 중인 이메일입니다.');
        } else {
          alert('사용 가능한 이메일입니다.');
          setIsDuplicateChecked(true);
        }
      })
      .catch((err) => {
        alert('서버 쪽에서 답이 안 왔지만 봐줄게요.');
        console.log(err);
      });
  };

  const handleEmailChange = (txt) => {
    setEmail(txt);
  };

  const handlePasswordChange = (txt) => {
    setPassword(txt);
  };

  const handlePasswordCheckChange = (txt) => {
    setPasswordCheck(txt);
  };

  return (
    <LinearGradientWrapper>
      <Container>
        <Text>이메일</Text>
        <Wrapper>
          <EmailInput
            color="white"
            placeholderTextColor="rgba(255, 255, 255, 0.3)"
            placeholder="이메일 입력"
            onChangeText={handleEmailChange}
            autoCapitalize="none"
          />
          <CheckButton onPress={checkDuplicate}>
            <CheckButtonText>중복확인</CheckButtonText>
          </CheckButton>
        </Wrapper>
        <Text>비밀번호</Text>

        <PasswordInput
          color="white"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          placeholder="8자 이상 대소문자, 숫자, 특수문자 조합"
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Message>
          8자 이상 대소문자, 숫자, 특수문자 조합으로 만들어주세요.
        </Message>
        <Text>비밀번호 확인</Text>
        <PasswordInput
          color="white"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          placeholder="비밀번호 재입력"
          onChangeText={handlePasswordCheckChange}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button onPress={navigateToNextScreen}>
          <ButtonText>확인</ButtonText>
        </Button>
      </Container>
    </LinearGradientWrapper>
  );
};

export default RegisterScreen;
