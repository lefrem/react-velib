import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

 
const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: FirstPage },
    Settings: { screen: SecondPage },
    About: { screen: ThirdPage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
    },
  }
);
 
export default createAppContainer(TabScreen);