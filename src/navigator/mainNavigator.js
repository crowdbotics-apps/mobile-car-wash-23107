import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile180727Navigator from '../features/UserProfile180727/navigator';
import Tutorial180726Navigator from '../features/Tutorial180726/navigator';
import NotificationList180698Navigator from '../features/NotificationList180698/navigator';
import Settings180697Navigator from '../features/Settings180697/navigator';
import Settings180689Navigator from '../features/Settings180689/navigator';
import UserProfile180687Navigator from '../features/UserProfile180687/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile180727: { screen: UserProfile180727Navigator },
Tutorial180726: { screen: Tutorial180726Navigator },
NotificationList180698: { screen: NotificationList180698Navigator },
Settings180697: { screen: Settings180697Navigator },
Settings180689: { screen: Settings180689Navigator },
UserProfile180687: { screen: UserProfile180687Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
