import React from 'react';
import styled from 'styled-components/native';
import {DateTime} from 'luxon';

const Container = styled.TouchableOpacity`
  margin: 10px 10px 10px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
`;

const MsgText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const SignalCard = ({location, date, to = undefined, msg}) => {
  const formattedDate = DateTime.fromISO(date);
  const minuteDiff = -formattedDate.diffNow('minutes').toFormat('mm');
  const hourDiff = -formattedDate.diffNow('hours').toFormat('hh');
  const dayDiff = -formattedDate.diffNow('days').toFormat('dd');

  return (
    <Container>
      <MsgText>
        {location} 날짜:{' '}
        {minuteDiff < 60
          ? minuteDiff + '분 전'
          : hourDiff < 24
          ? hourDiff + '시간 전'
          : dayDiff + '일 전'}
      </MsgText>
      <MsgText>
        {location} 문자: {msg}
      </MsgText>
      {to && <MsgText>받은 사람: {to}</MsgText>}
    </Container>
  );
};

export default SignalCard;
