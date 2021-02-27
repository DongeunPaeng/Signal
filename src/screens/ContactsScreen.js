import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {SearchBar} from 'react-native-elements';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

import Contact from '../components/Contacts';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';
import Users from '../stores/Users';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
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
`;
const ContactsScreen = (props) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getContacts = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
    }
    const allContacts = await Contacts.getAll();
    const trimmedContacts = allContacts.map((contact) => ({
      id: contact.recordID,
      name:
        Platform.OS === 'android'
          ? contact.displayName
          : contact.givenName + contact.familyName,
      phone: contact.phoneNumbers[0]?.number.replace(/[-() ]/g, ''),
    }));
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'bearer ' + Users.token,
      },
      body: JSON.stringify({
        phone: trimmedContacts,
      }),
    };
    let finalContacts;
    await fetch('https://heartsignal.dev/api/users/get-users', fetchOptions)
      .then(async (res) => {
        if (res.status === 413) {
          alert('연락처가 많아 응답이 느릴 수 있어요.');
          return;
        }
        if (res.status !== 200) {
          alert('서버에서 응답이 이상하게 날아왔어요.');
          return;
        }
        const data = await res.json();
        const existingUsers = data.map((user) => user.phone);
        finalContacts = trimmedContacts.map((contact) => {
          return existingUsers.includes(contact.phone)
            ? {existing: true, ...contact}
            : {existing: false, ...contact};
        });
      })
      .catch((err) => {
        console.log('err:', err);
      });
    finalContacts.sort((a, b) => b.existing - a.existing);
    setContacts(finalContacts ? finalContacts : trimmedContacts);
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
      existing={item.existing}
      onPress={() => {
        props.navigation.navigate('SendSignalScreen', {
          name: item.name,
          phone: item.phone,
        });
      }}
    />
  );

  const filteredContacts = contacts?.filter(
    (contact) => contact.name && contact.name.includes(searchTerm),
  );

  return (
    <LinearGradientWrapper>
      <Container>
        <SearchView>
          <SearchBar
            color="white"
            searchIcon={{color: 'white'}}
            inputStyle={{
              textAlign: 'left',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            inputContainerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: 'transparent',
            }}
            containerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 5000,
              marginTop: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
              shadowColor: '#000',
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 50,
              shadowColor: '#000',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            }}
            placeholder="연락처 검색"
            placeholderTextColor="white"
            clearIcon={{color: 'white'}}
            onChangeText={handleSearch}
            value={searchTerm}
            autoCapitalize="none"
          />
        </SearchView>
        <Text>누구에게 보낼 건가요?</Text>
        <ContactsView
          data={filteredContacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </LinearGradientWrapper>
  );
};

export default ContactsScreen;
