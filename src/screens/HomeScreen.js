import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff7f5;
`;

const SearchView = styled.View`
  width: 80%;
  height: 40px;
  margin-bottom: 50px;
`;

const TextInput = styled.TextInput`
  flex: 1;
`;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5000,
    fontWeight: 'bold',
    height: 70,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
});

const HomeScreen = (props) => {
  return (
    <Container>
      <SearchView>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="gray"
          placeholder="시그널 보내기"
          onTouchStart={() => {
            props.navigation.navigate('ContactsScreen');
          }}
        />
      </SearchView>
    </Container>
  );
};

export default HomeScreen;
