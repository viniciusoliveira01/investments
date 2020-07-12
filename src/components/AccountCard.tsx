import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '@config/colors';

const AccountCard = ({ theme, cardName, cardType, onSimulate }) => {
  return (
    <AccountCardContainer activeOpacity={0.8} onPress={() => onSimulate()}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
        colors={theme}
      >
        <CardContainer>
          <View>
            <CardText type="name">{cardName}</CardText>
            <CardText>{cardType}</CardText>
          </View>
        </CardContainer>

        <Icon name="ios-arrow-forward" style={styles.openButtonIcon} />
      </LinearGradient>
    </AccountCardContainer>
  );
};

const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

const CardText = styled.Text`
  color: ${colors.white};
  font-size: ${(props) => (props.type === 'name' ? '16px' : '12px')};
  font-weight: ${(props) => (props.type === 'name' ? 500 : 200)};
`;

const CardType = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  font-weight: 200;
`;

const AccountCardContainer = styled.TouchableOpacity``;

const styles = StyleSheet.create({
  gradient: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  openButtonIcon: {
    marginRight: 10,
    color: colors.white,
    fontSize: 20,
  },
});

export default AccountCard;
