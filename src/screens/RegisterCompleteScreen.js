import React, {useState} from 'react';
import styled from 'styled-components/native';
import Users from '../stores/Users';

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

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
`;

const TextInput = styled.TextInput`
  padding-bottom: 10px;
  border-bottom-width: 0.5px
  border-bottom-color: white;
  flex: 3;
  elevation: 50;
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
`;

const CheckButtonText = styled.Text`
  font-weight: bold;
  color: white;
  text-align: center;
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

const RegisterCompleteScreen = (props) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isAuthSent, setIsAuthSent] = useState(false);
  const [isAuthSucceeded, setIsAuthSucceeded] = useState(false);

  const handlePhoneChange = (txt) => {
    setPhone(txt);
    setIsAuthSent(false);
  };

  const handleAuthCodeChange = (txt) => {
    setAuthCode(txt);
    setIsAuthSucceeded(false);
  };

  const handleNameChange = (txt) => {
    setName(txt);
  };

  const requestAuthCode = () => {
    if (!phone) {
      alert('전화번호를 입력하세요');
      return;
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone,
      }),
    };
    fetch('https://heartsignal.dev/api/users/send-auth', fetchOptions)
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          if (data.isDuplicate) {
            alert('사용 중인 휴대전화입니다.');
          } else {
            setIsAuthSent(true);
            alert('인증번호를 1분 내로 입력해주세요');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const checkAuthCode = () => {
    if (!isAuthSent) {
      alert('인증번호 발송을 눌러주세요');
      return;
    } else if (!authCode) {
      alert('인증번호를 입력해주세요');
      return;
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone,
        authCode,
      }),
    };
    fetch('https://heartsignal.dev/api/users/check-auth', fetchOptions)
      .then((res) => {
        if (res.status !== 200) {
          alert('인증 실패');
          return;
        } else if (res.status === 200) {
          setIsAuthSucceeded(true);
          alert('인증 성공!');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('서버에서 답이 없어요.');
      });
  };

  const register = () => {
    if (!name || !phone) {
      alert('내용을 모두 입력해주세요!');
      return;
    }
    if (!isAuthSucceeded) {
      alert('전화번호 인증을 완료해주세요!');
      return;
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: props.route.params.email,
        password: props.route.params.password,
        phone,
        name,
      }),
    };
    fetch('https://heartsignal.dev/api/users/', fetchOptions)
      .then(async (res) => {
        const data = await res.json();
        Users.setUser(data.token, data.name, data.phone);
        props.navigation.reset({index: 0, routes: [{name: 'Main'}]});
      })
      .catch((err) => {
        console.log(err);
        alert('서버에서 답이 없어요.');
      });
  };

  return (
    <Container>
      <Text>전화번호</Text>
      <Wrapper>
        <TextInput
          color="white"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          placeholder="01012345678"
          onChangeText={handlePhoneChange}
        />
        <CheckButton onPress={requestAuthCode}>
          <CheckButtonText>인증번호 발송</CheckButtonText>
        </CheckButton>
      </Wrapper>
      <Text>인증번호</Text>
      <Wrapper>
        <TextInput
          color="white"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          placeholder="1234"
          onChangeText={handleAuthCodeChange}
        />
        <CheckButton onPress={checkAuthCode}>
          <CheckButtonText>인증번호 확인</CheckButtonText>
        </CheckButton>
      </Wrapper>
      <Text>이름</Text>
      <Wrapper>
        <TextInput
          color="white"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          placeholder="홍길동"
          onChangeText={handleNameChange}
        />
      </Wrapper>
      <Button onPress={register}>
        <ButtonText>가입완료</ButtonText>
      </Button>
    </Container>
  );
};
export default RegisterCompleteScreen;
