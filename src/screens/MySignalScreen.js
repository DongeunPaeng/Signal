import React from 'react';
import styled from 'styled-components/native';
import Users from '../stores/Users';

import SignalTab from '../navigators/SignalTab';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
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
  justify-content: flex-start;
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
      </ProfileView>
      <SignalView>
        <SignalTab />
      </SignalView>
    </Container>
  </LinearGradientWrapper>
);

export default MySignalScreen;
