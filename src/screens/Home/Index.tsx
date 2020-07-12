import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import colors from '@config/colors';
import AccountCard from '@components/AccountCard';
import HeaderComponent from '@components/Header';
import HistoryCard from '@components/HistoryCard';

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.darkPurple} />

      <HeaderComponent title="Home" />

      <HomeContainer>
        <AccountCard
          cardName="Simule seus investimentos"
          cardType="e veja quanto você terá investido no futuro"
          theme={[colors.purple, colors.darkPurple]}
          cardIcon={null}
          onSimulate={() => navigation.navigate('Simulate')}
        />

        <Divider />

        <HistoryContainer>
          <HistoryCard
            title="Atingir 10k"
            valueNow={10000}
            goal={10000}
            dateYear={2019}
          />

          <HistoryCard
            title="Atingir 100k"
            valueNow={50000}
            goal={100000}
            dateYear={2020}
          />

          <HistoryCard
            title="Atingir 1 milhão"
            valueNow={50000}
            goal={1000000}
            dateYear={2027}
          />
        </HistoryContainer>
      </HomeContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
const HomeContainer = styled.View`
  margin-top: 30px;
`;

const Divider = styled.View`
  height: 1;
  background-color: #f3f3f3;
  margin-top: 40;
`;

const HistoryContainer = styled.ScrollView`
  height: 100%;
`;
