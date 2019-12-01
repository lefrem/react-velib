import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default class Exo6 extends React.Component {

  constructor() {
    super();
    this.state = {
      ready: false,
      where: {lat:'null', lng:'null'},
      error: null,
    }
  }

  componentDidMount(){
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 2000,
      maximumAge: 60 * 60 * 24,
    };
    this.setState({ready:false, error: null})
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions,
      );
  }

  geoSuccess = (position) => {
    console.log(position);
    this.setState({
      ready:true,
      where: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }

  geoFailure = (err) => {
    this.setState({ error: err.message })
  }

  render () {
    return (
      <View style={styles.container}> 

        { !this.state.ready && (
          <Text>
            geolocation in react
          </Text>
        ) }

        { this.state.error && (
          <Text>
            {this.state.error}
          </Text>
        ) }

        { this.state.ready && (
          <View>
            <Text>
              Latitude: {this.state.where.lat} 
            </Text>
            <Text>
              Longitude: {this.state.where.lng}
            </Text>
          </View>
        ) }

      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})