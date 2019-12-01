import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './components/Home';
import Exo1 from './components/exos/Exo1';
import Exo2 from './components/exos/Exo2';
import Exo3 from './components/exos/Exo3';
import Exo4 from './components/exos/Exo4';
import Exo6 from './components/exos/Exo6';
import Acceuil from './components/project/Acceuil';

const Tabs = createBottomTabNavigator({
  Home: {screen : Home},
  Exo1: {screen : Exo1},
  Exo2: {screen : Exo2}, 
  Exo3: {screen : Exo3},
  Exo4: {screen : Exo4},
  Exo6: {screen : Exo6},
  Project: {screen : Acceuil},
}
)

//export default createAppContainer(Tabs);

const Screen = createAppContainer(Tabs);

export default () => {
  return(
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <Screen />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})