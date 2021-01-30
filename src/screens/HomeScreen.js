import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  },
});

const HomeScreen = (props) => {
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
      </Container>
    </LinearGradientWrapper>
  );
};

export default HomeScreen;
