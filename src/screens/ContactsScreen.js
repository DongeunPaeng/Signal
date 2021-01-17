import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {SearchBar} from 'react-native-elements';
import {View, Text} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

import Contact from '../components/Contacts';

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

const ContactsView = styled.FlatList`
  flex: 1;
  width: 100%;
  background-color: white;
`;

const ContactsScreen = (props) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getContacts = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(async () => {
      const allContacts = await Contacts.getAll();
      const trimmedContacts = allContacts.map((contact) => ({
        id: contact.recordID,
        name: contact.displayName,
        phone: contact.phoneNumbers[0]?.number.replace(/-/g, ''),
      }));
      setContacts(trimmedContacts);
    });
  };

  useEffect(() => {
    getContacts();
  }, []);

  const handleSearch = (txt) => {
    setSearchTerm(txt);
  };

  const renderItem = ({item}) => (
    <Contact
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

  const filteredContacts = contacts.filter((contact) =>
    contact.name.includes(searchTerm),
  );

  return (
    <Container>
      <SearchView>
        <SearchBar
          inputStyle={{backgroundColor: 'transparent'}}
          inputContainerStyle={{backgroundColor: '#E5E5EA'}}
          containerStyle={{
            backgroundColor: 'white',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          round={true}
          placeholder="누구에게 시그널을 보낼까요?"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </SearchView>
      <ContactsView
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default ContactsScreen;
