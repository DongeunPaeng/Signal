// TODO: improve

import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const SearchView = styled.View`
  width: 80%;
  height: 40px;
  margin-bottom: 50px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  padding: 2px 20px;
  border-radius: 20px;
  border: 4px solid tomato;
`;

const HomeScreen = props => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    setContacts(['Test']);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Container>
      <SearchView>
        <TextInput
          placeholder="시그널 보내기~!"
          onTouchStart={() => {
            props.navigation.navigate('ContactsScreen');
          }}
        />
      </SearchView>
    </Container>
  );
};

export default HomeScreen;
