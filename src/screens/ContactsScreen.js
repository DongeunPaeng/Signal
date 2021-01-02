import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Contacts from '../components/Contacts';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const SearchView = styled.View`
  margin-top: 30px;
  width: 80%;
  height: 40px;
  margin-bottom: 30px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  padding: 2px 20px 2px 20px;
  border-radius: 20px;
  border: 4px solid tomato;
`;

const ContactsView = styled.FlatList`
  flex: 1;
  width: 100%;
  background-color: white;
`;

const ContactsScreen = props => {
  const [contacts, setContacts] = useState([
    {id: '1', name: '홍길동', phone: '01011111111'},
    {id: '2', name: '임꺽정', phone: '01011111111'},
    {id: '3', name: '팽동은', phone: '01011111111'},
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = txt => {
    setSearchTerm(txt);
  };
  const renderItem = ({item}) => (
    <Contacts
      name={item.name}
      phone={item.phone}
      onPress={() => {
        props.navigation.navigate('SendSignalScreen', {
          name: item.name,
          phone: item.phone,
        });
      }}
    />
  );

  return (
    <Container>
      <SearchView>
        <TextInput
          placeholder="누구에게 시그널을 보낼까요?"
          onChangeText={handleSearch}
        />
      </SearchView>
      <ContactsView
        data={contacts} // TODO: change to filteredContacts
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default ContactsScreen;
