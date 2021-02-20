import React from 'react';
import styled from 'styled-components/native';
import Users from '../stores/Users';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignalTab from '../navigators/SignalTab';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;
const ProfileView = styled.View`
  height: 120px;
  flex-direction: row;
  margin-bottom: 20px;
`;

const ProfileTxtView = styled.View`
  flex: 2;
  margin-left: 20px;
`;

const InfoView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProfilePicView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const NameTxt = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 25px;
  color: white;
`;

const PhoneTxt = styled.Text`
  font-size: 40px;
  color: white;
`;

const SignalView = styled.View`
  width: 100%;
  flex: 1;
  background-color: transparent;
`;

const Description = styled.Text`
  font-size: 15px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  color: white;
`;

const MarginBottom = styled.View`
  margin-bottom: 30px;
`;

const MySignalScreen = () => (
  <LinearGradientWrapper>
    <Container>
      <ProfileView>
        <ProfileTxtView>
          <InfoView>
            <NameTxt>{Users.name}님,</NameTxt>
            <PhoneTxt>반가워요.</PhoneTxt>
          </InfoView>
        </ProfileTxtView>
        <ProfilePicView>
          <Ionicons
            size={80}
            style={{marginRight: 10}}
            name="person-circle"
            color="white"
          />
        </ProfilePicView>
      </ProfileView>
      <MarginBottom>
        <Description>2021년 3월 1일 이후 발신 문자의 경우</Description>
        <Description>문자 수신 후 50일이 지나면 발신자가 공개됩니다.</Description>
      </MarginBottom>
      <SignalView>
        <SignalTab />
      </SignalView>
    </Container>
  </LinearGradientWrapper>
);

export default MySignalScreen;
