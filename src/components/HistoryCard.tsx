import React from 'react';

import styled from 'styled-components';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import colors from '@config/colors';

const HistoryCard = ({ title, valueNow, goal, dateYear }) => {
  const progressPercent = (valueNow / goal) * 100;
  const isProgressCompleted =
    progressPercent === 100 ? colors.green : colors.purple;

  return (
    <HistoryCardContainer>
      <DateContainer>
        <DateView progressPercent={progressPercent}>
          <DateText>{dateYear}</DateText>
        </DateView>
      </DateContainer>
      <ContentContainer>
        <ContentRow>
          <GoalText progressPercent={progressPercent}>{title}</GoalText>
          <GoalText progressPercent={progressPercent}>
            {progressPercent}%
          </GoalText>
        </ContentRow>
        <ProgressBarAnimated
          width={300}
          value={progressPercent}
          backgroundColor={isProgressCompleted}
        />
      </ContentContainer>
    </HistoryCardContainer>
  );
};

const HistoryCardContainer = styled.View`
    backgroundColor: ${colors.white};
    margin-horizontal: 20px;
    margin-top: 40px;
    border-radius: 5px;
    shadow-color: ${colors.black};
    shadow-offset: {
    width: 0px,
    height: 3px
    };
    shadow-opacity: 0.27;
    shadow-radius: 4.65;
    elevation: 1;
`;

const DateContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const DateView = styled.View`
  width: 50px;
  background-color: ${(props) =>
    props.progressPercent === 100 ? colors.green : colors.purple};
  margin-top: -10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const DateText = styled.Text`
  color: ${colors.white};
  font-size: 10px;
  margin: 5px;
  margin-horizontal: 10px;
  font-weight: 700;
`;

const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContentRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const GoalText = styled.Text`
  color: ${(props) =>
    props.progressPercent === 100 ? colors.green : colors.lightGrey};
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 700;
`;

export default HistoryCard;
