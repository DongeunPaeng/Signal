import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Alert, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import Users from '../stores/Users';
import SignalCard from '../components/SignalCard';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SignalList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

const SentSignals = (props) => {
  const [signals, setSignals] = useState([]);
  const isFocused = useIsFocused();

  const getSignals = () => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'bearer ' + Users.token,
      },
    };
    fetch('https://heartsignal.dev/api/users/sent-signals', fetchOptions)
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 403) {
          alert('신고 누적으로 로그아웃됩니다.');
          Users.clearUser();
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
          return;
        }
        if (res.status === 200) {
          setSignals(data.reverse());
        } else {
          alert('서버에서 답이 이상하게 왔어요...');
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSignals();
  }, [isFocused]);

  const renderItem = ({item}) => (
    <SignalCard
      location={props.route.name.split(' ')[0]}
      msg={item.msg}
      date={item.created_at}
      to={item.receiver_name}
      reported={item.reported}
      onPress={null}
    />
  );

  return (
    <Container>
      {signals?.length > 0 ? (
        <SignalList
          data={signals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={{color: 'white'}}>시그널을 보내보세요!</Text>
      )}
    </Container>
  );
};

export default SentSignals;
