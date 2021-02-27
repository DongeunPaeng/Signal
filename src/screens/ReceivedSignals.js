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

const ReceivedSignals = (props) => {
  const createTwoButtonAlert = (item) => {
    return Alert.alert(
      '발신자를 신고하시겠어요?',
      `신고가 2회 이상 누적될 경우
발신자의 계정이 영구 삭제됩니다.`,
      [
        {
          text: '취소',
          onPress: () => console.log('취소되었습니다.'),
          style: 'cancel',
        },
        {
          text: '신고하기',
          onPress: () => {
            const fetchOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                authorization: 'bearer ' + Users.token,
              },
              body: JSON.stringify({item}),
            };
            fetch(
              'https://www.heartsignal.dev/api/users/report-signals',
              fetchOptions,
            )
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
                if (res.status === 200) {
                  alert('신고가 접수되었습니다.');
                  return;
                }
                alert('서버에서 답이 이상하게 왔어요...');
                return;
              })
              .catch((err) => console.log(err));
          },
        },
      ],
      {cancelable: false},
    );
  };

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
    fetch('https://heartsignal.dev/api/users/received-signals', fetchOptions)
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
      reported={item.reported}
      onPress={() => {
        createTwoButtonAlert(item);
      }}
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
        <Text style={{color: 'white'}}>받은 시그널이 없어요</Text>
      )}
    </Container>
  );
};

export default ReceivedSignals;
