import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Header, Left, Body, Right, Icon, Title } from 'native-base';

import colors from '@config/colors';

const HeaderComponent = ({ title }) => {
  return (
    <Header
      style={{ borderBottomColor: colors.white, backgroundColor: colors.white }}
    >
      <Left>
        <TouchableOpacity>
          <Icon name="ios-menu" style={{ marginLeft: 15, color: '#a7c3d9' }} />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title style={{ fontWeight: '700', color: colors.lightGrey }}>
          {title}
        </Title>
      </Body>
      <Right>
        <TouchableOpacity>
          <Icon
            name="bell"
            type="EvilIcons"
            style={{ marginRight: 10, color: '#a7c3d9' }}
          />
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

export default HeaderComponent;
