import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Exo5 extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          file5
        </Text>
      </View>
    )
  }
}

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