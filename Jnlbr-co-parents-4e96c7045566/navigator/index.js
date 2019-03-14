import { createSwitchNavigator, createAppContainer, } from 'react-navigation';
import authNavigator from './auth';
import drawerNavigator from './drawer';

const nav = createSwitchNavigator(
  {
    AuthNavigator: authNavigator,
    MainNavigator: drawerNavigator
  }, {
    // change to AuthNavigator
    initialRouteName: 'AuthNavigator',
  }
);

export default createAppContainer(nav);