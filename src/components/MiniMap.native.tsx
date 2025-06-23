import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Location } from "../types/Location";

type MiniMapProps = {
  location: Location;
  height?: number;
};

const MiniMap: React.FC<MiniMapProps> = ({ location, height = 150 }) => {
  return (
    <View style={[styles.mapContainer, { height }]}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coordinates.latitude,
          longitude: location.coordinates.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker
          coordinate={location.coordinates}
          title={location.name}
        />
      </MapView>
    </View>
  );
};

export default MiniMap;

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 10,
  },
  map: {
    flex: 1,
  },
});
