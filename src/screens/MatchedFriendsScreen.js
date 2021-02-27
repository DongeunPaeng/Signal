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
`;

const SignalList = styled.FlatList`
  flex: 1;
  width: 100%;
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
    fetch('https://heartsignal.dev/api/users/matched-friends', fetchOptions)
      .then(async (res) => {
        if (res.status === 403) {
          alert('신고 누적으로 로그아웃됩니다.');
          Users.clearUser();
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
          return;
        }
        const data = await res.json();
        if (res.status === 200) {
          setFriends(data.reverse());
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
        <Text style={{color: 'white'}}>이어진 친구가 없어요</Text>
      )}
    </Container>
  );
};

export default MatchedFriendsScreen;
