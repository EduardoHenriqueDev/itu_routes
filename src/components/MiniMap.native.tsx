import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { Location } from "../types/Location";

type MiniMapProps = {
  location: Location;
  height?: number;
};

const MiniMap: React.FC<MiniMapProps> = ({ location, height = 150 }) => {
  const [region, setRegion] = useState<Region>({
    latitude: location.coordinates.latitude,
    longitude: location.coordinates.longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const zoomIn = () => {
    setRegion((prev) => ({
      ...prev,
      latitudeDelta: prev.latitudeDelta / 2,
      longitudeDelta: prev.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setRegion((prev) => ({
      ...prev,
      latitudeDelta: prev.latitudeDelta * 2,
      longitudeDelta: prev.longitudeDelta * 2,
    }));
  };

  return (
    <View style={[styles.mapContainer, { height }]}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker coordinate={location.coordinates} title={location.name} />
      </MapView>

      {/* Botões de Zoom */}
      <View style={styles.zoomControls}>
        <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
          <Text style={styles.zoomText}>-</Text>
        </TouchableOpacity>
      </View>
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
    position: "relative",
  },
  map: {
    flex: 1,
  },
  zoomControls: {
    position: "absolute",
    right: 10,
    top: 10,
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 4,
  },
  zoomButton: {
    padding: 6,
    alignItems: "center",
  },
  zoomText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});