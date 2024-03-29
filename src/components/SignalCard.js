import React from 'react';
import styled from 'styled-components/native';
import {DateTime} from 'luxon';

const Container = styled.TouchableOpacity`
  margin: 10px 10px 10px 10px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-direction: row;
`;

const MsgContainerLeft = styled.View``;

const MsgContainerRight = styled.View`
  align-items: flex-end;
`;

const FriendsText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const MsgText = styled.Text`
  color: white;
  font-size: 14px;
`;

const TimeText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

const SignalCard = ({
  reported,
  onPress,
  location,
  date,
  to = undefined,
  msg,
}) => {
  const formattedDate = DateTime.fromISO(date);
  const minuteDiff = -formattedDate.diffNow('minutes').toFormat('mm');
  const hourDiff = -formattedDate.diffNow('hours').toFormat('hh');
  const dayDiff = -formattedDate.diffNow('days').toFormat('dd');

  return (
    <Container onPress={location === '받은' ? (reported ? null : onPress) : null}>
      <MsgContainerLeft>
        <FriendsText>{to ? to : '익명의 친구'}</FriendsText>
        <MsgText>{msg}</MsgText>
      </MsgContainerLeft>
      <MsgContainerRight>
        <TimeText>
          {minuteDiff < 60
            ? minuteDiff + '분 전'
            : hourDiff < 24
            ? hourDiff + '시간 전'
            : dayDiff + '일 전'}
        </TimeText>
        {reported ? (
          <TimeText>신고됨</TimeText>
        ) : location === '받은' ? (
          <TimeText>눌러서 신고</TimeText>
        ) : null}
      </MsgContainerRight>
    </Container>
  );
};

export default SignalCard;
