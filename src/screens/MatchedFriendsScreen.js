import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import Users from '../stores/Users';
import FriendsCard from '../components/FriendsCard';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const SignalList = styled.FlatList`
  flex: 1;
  width: 100%;
  background-color: white;
`;

const MatchedFriendsScreen = () => {
  const [friends, setFriends] = useState([]);
  const isFocused = useIsFocused();

  const getFriends = () => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'bearer ' + Users.token,
      },
    };
    fetch('http://10.0.2.2:3000/api/users/matched-friends', fetchOptions)
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setFriends(data);
        } else {
          alert('서버에서 친구를 못 불러왔어요.');
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFriends();
  }, [isFocused]);

  const renderItem = ({item}) => (
    <FriendsCard name={item.name} phone={item.phone} />
  );

  return (
    <Container>
      {friends?.length > 0 ? (
        <SignalList
          data={friends}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>이어진 친구가 없어요</Text>
      )}
    </Container>
  );
};

export default MatchedFriendsScreen;
