import React, {useState} from 'react';
import Users from '../stores/Users';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  background-color: white;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const EmailInput = styled.TextInput`
  flex: 4;
  height: 50px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: tomato;
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
  padding: 5px;
  border: 1px solid tomato;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

const PasswordInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: tomato;
  margin-bottom: 20px;
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

const CheckButtonText = styled.Text``;

const RegisterScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const navigateToNextScreen = () => {
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
      alert('내용을 모두 입력해주세요');
      return;
    } else if (!isDuplicateChecked) {
      alert('이메일 중복확인을 해주세요');
      return;
    } else if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      fetch('https://api.heartsignalapp.com/users/temp', fetchOptions)
        .then(async res => {
          const data = await res.json();
          if (true) {
            // TODO: should add a condition here.
            props.navigation.navigate('RegisterCompleteScreen', {
              email,
              password,
            });
          }
        })
        .catch(err => {
          alert('서버에서 답을 주지 않았지만 봐줄게요.');
          // TODO: delete lines below
          props.navigation.navigate('RegisterCompleteScreen', {
            email,
            password,
          });
          console.log(err);
        });
    }
  };

  const checkDuplicate = () => {
    if (!email) {
      alert('이메일을 입력해주세요.');
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
    fetch('https://api.heartsignalapp.com/users/check-duplicate', fetchOptions)
      .then(async res => {
        const data = await res.json();
        if (data.data.isDuplicate) {
          alert('사용 중인 이메일입니다.');
        } else {
          alert('사용 가능한 이메일입니다.');
          setIsDuplicateChecked(true);
        }
      })
      .catch(err => {
        alert('서버 쪽에서 답이 안 왔지만 봐줄게요.');
        setIsDuplicateChecked(true); // TODO: delete this line.
        console.log(err);
      });
  };

  const handleEmailChange = txt => {
    setEmail(txt);
  };

  const handlePasswordChange = txt => {
    setPassword(txt);
  };

  const handlePasswordCheckChange = txt => {
    setPasswordCheck(txt);
  };

  return (
    <Container>
      <Text>이메일</Text>
      <Wrapper>
        <EmailInput
          placeholder="이메일 입력"
          onChangeText={handleEmailChange}
        />
        <CheckButton onPress={checkDuplicate}>
          <CheckButtonText>중복 확인</CheckButtonText>
        </CheckButton>
      </Wrapper>
      <Text>비밀번호</Text>
      <PasswordInput
        placeholder="비밀번호 입력"
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <Text>비밀번호 확인</Text>
      <PasswordInput
        placeholder="비밀번호 재입력"
        onChangeText={handlePasswordCheckChange}
        secureTextEntry={true}
      />
      <Button onPress={navigateToNextScreen}>
        <ButtonText>확인</ButtonText>
      </Button>
    </Container>
  );
};

export default RegisterScreen;
