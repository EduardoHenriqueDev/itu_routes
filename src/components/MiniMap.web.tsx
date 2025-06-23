import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Location } from "../types/Location";

type MiniMapProps = {
    location: Location;
    height?: number;
};

const MiniMap: React.FC<MiniMapProps> = ({ height = 150 }) => {
    return (
        <View style={[styles.mapContainer, { height, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" }]}>
            <Text>Mapa não disponível na Web</Text>
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
});