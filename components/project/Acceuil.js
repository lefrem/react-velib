import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Maps from './files/Maps';
import List from './files/List'

const TabScreen = createMaterialTopTabNavigator(
  {
    Maps: { screen: Maps },
    List: { screen: List },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#8D021F',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
          backgroundColor: '#7070ff'
      }
    },
  }
);
 
export default createAppContainer(TabScreen);