import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import Users from '../stores/Users';
import Card from '../components/Card'

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

const SentSignals = props => {
  const [signals, setSignals] = useState([
    {id: '1', content: 'Hello 1'},
    {id: '2', content: 'Hello 2'},
    {id: '3', content: 'Hello 3'},
  ]);

  const isFocused = useIsFocused();

  const renderItem = ({item}) => <Card content={item.content} />;

  return (
    <Container>
      {signals?.length > 0 ? (
        <SignalList
          data={signals}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>시그널을 보내보세요!</Text>
      )}
    </Container>
  );
};

export default SentSignals;
