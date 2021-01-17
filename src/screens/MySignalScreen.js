import React from 'react';
import styled from 'styled-components/native';
import Users from '../stores/Users';

import SignalTab from '../navigators/SignalTab';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
`;
const ProfileView = styled.View`
  height: 150px;
  flex-direction: row;
  margin-top: 20px;
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

const NameTxt = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;

const PhoneTxt = styled.Text``;

const ProfileImgView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfileImg = styled.Image`
  width: 100px;
  height: 100px;
  background-color: #eef3f3;
  border-radius: 50px;
`;

const SignalView = styled.View`
  width: 100%;
  flex: 1;
  background-color: red;
`;

const MySignalScreen = () => (
  <Container>
    <ProfileView>
      <ProfileTxtView>
        <InfoView>
          <NameTxt>{Users.name}</NameTxt>
          <PhoneTxt>{Users.phone}</PhoneTxt>
        </InfoView>
      </ProfileTxtView>
      <ProfileImgView>
        <ProfileImg
          source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
          resizeMode="contain"
        />
      </ProfileImgView>
    </ProfileView>
    <SignalView>
      <SignalTab />
    </SignalView>
  </Container>
);

export default MySignalScreen;
