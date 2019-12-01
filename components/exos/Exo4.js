import React from "react";
import { ScrollView,Text,StyleSheet,Dimensions,View,TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

const VelibExemple = props => {
   const {
    station_name,
    nbbike,
    nbebike,
    creditcard,
    geometry,
  } = props

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        region={{
          latitude: geometry.coordinates[1],
          longitude: geometry.coordinates[0],
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: geometry.coordinates[1],
            longitude: geometry.coordinates[0],
          }}
        >
          <View style={styles.mapMarker}>
            <Text style={{textAlign: "center" }}>{station_name}</Text>
            <Text style={[
                styles.rowAvailability,
                {
                  textAlign: "center",
                  color: nbbike > 0 ? "black" : "red",
                },
              ]}>
                Vélos : {nbbike}
            </Text>
            <Text style={[
                styles.rowAvailability,
                {
                  textAlign: "center",
                  color: nbebike > 0 ? "black" : "red",
                },
              ]}>
                Electriques : {nbebike}
            </Text>
          </View>
        </MapView.Marker>
      </MapView>
      <View style={styles.content}>
        <Text style={styles.title}>{station_name}</Text>
        <View style={styles.row}>
          <Text style={styles.rowIcon}>📍</Text>
          <Text style={styles.rowText}>à 400m de vous</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowIcon}>🚲</Text>
          <Text style={styles.rowText}>{nbbike} vélos disponibles.</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowIcon}>⚡</Text>
          <Text style={styles.rowText}>{nbebike} vélos électriques disponibles.</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowIcon}>🎫</Text>
          <Text style={styles.rowText}>
            {Boolean(creditcard)
              ? "Achat de ticket disponible"
              : "Achat de ticket indisponible"}
          </Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() =>
              openMap=({
                latitude: geometry.coordinates[1],
                longitude: geometry.coordinates[0],
              })
            }
          >
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

VelibExemple.defaultProps = {
  station_name: "Nation",
  nbbike: 2,
  nbebike: 1,
  creditcard: "yes",
  geometry: {
    coordinates: [2.3938038 , 48.8486833 ],
  },
};

export default VelibExemple;

VelibExemple.navigationOptions = {
  title: "Exo4&5"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    height: '50%',
    width: Dimensions.get("window").width,
  },
  mapMarker: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  rowIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  rowText: {
    fontSize: 17,
  },
});