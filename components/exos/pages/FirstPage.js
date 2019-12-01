import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator, } from 'react-navigation';


export default class FirsPage extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          Home Page
        </Text>
        {/* <Button onPress={()=>this.props.naviation.more()} title="More"/> */}
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

// export default HomeStack = createStackNavigator({
//   Home: { screen: FirsPage },
//   Details: { screen: DetailsScreen },
// });

const styles = StyleSheet.create({
  content : {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
  },
  text : {
      margin: 30,
      fontSize: 25,
      textAlign: 'center',
  }
});