import { createStackNavigator } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@screens/Home/Index.js';
import SimulateScreen from '@screens/Simulate/Index.js';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Simulate: {
      screen: SimulateScreen,
    },
  },
  {
    initialRouteName: 'Simulate',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default AppNavigator;
