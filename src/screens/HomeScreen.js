import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Linking} from 'react-native';

import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
`;

const PrivacyContainer = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: flex-end;
`;

const Privacy = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: white;
`;

const SearchView = styled.View`
  width: 80%;
  height: 40px;
  margin-bottom: 50px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: 'rgba(255, 255, 255, 1.0)';
`;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5000,
    fontWeight: 'bold',
    fontSize: 20,
    height: 70,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    elevation: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

const HomeScreen = (props) => {
  handleClick = () => {
    Linking.canOpenURL('https://heartsignal.dev/privacy').then(supported => {
      if (supported) {
        Linking.openURL('https://heartsignal.dev/privacy');
      } else {
        console.log("Error");
      }
    });
  };
  return (
    <LinearGradientWrapper>
      <Container>
        <SearchView>
          <Button
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('ContactsScreen');
            }}>
            <ButtonText>START</ButtonText>
          </Button>
        </SearchView>
        <Text>버튼을 눌러 시그널을 보낼 친구를 선택하세요.</Text>
        <PrivacyContainer>
          <Button
            onPress={handleClick}>
            <Privacy>개인정보처리방침</Privacy>
          </Button>
        </PrivacyContainer>
      </Container>
    </LinearGradientWrapper>
  );
};

export default HomeScreen;
