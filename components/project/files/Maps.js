import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";

export default class Maps extends React.Component {

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
          timeOut: 20000,
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
                Loading position
              </Text>
            ) }
    
            { this.state.error && (
              <Text>
                {this.state.error}
              </Text>
            ) }
    
            { this.state.ready && (
                <ScrollView contentContainerStyle={styles.containers}>
                    <MapView
                        style={styles.map}
                        showsUserLocation={true}
                        region={{
                            latitude: this.state.where.lat,
                            longitude: this.state.where.lng,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                    </MapView>
                </ScrollView>
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
    },
    containers: {
        flex: 1,
      },
    map: {
        height: '100%',
        width: Dimensions.get("window").width,
    },
})