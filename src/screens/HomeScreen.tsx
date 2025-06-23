import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { locations } from "../data/locations";
import { Location } from "../types/Location";
import { Dimensions } from "react-native";
import LocationCard from "../components/LocationCard";
import LocationDetailModal from "../components/LocationDetailModal";
import AppColors from "../constants/AppColors";

const windowHeight = Dimensions.get("window").height;

const HomeScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (location: Location) => {
        setSelectedLocation(location);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedLocation(null);
    };

    return (
        <View style={styles.container}>
            {/* Título fixo no topo */}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Rota dos Exageros,{" "}
                    <Text style={styles.highlight}>Itu</Text>
                </Text>
            </View>

            {/* Scroll das cards */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {locations.map((location) => (
                    <LocationCard
                        key={location.id}
                        location={location}
                        onPress={() => openModal(location)}
                    />
                ))}
            </ScrollView>

            {/* Modal */}
            <LocationDetailModal
                visible={modalVisible}
                location={selectedLocation}
                onClose={closeModal}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
        backgroundColor: AppColors.background,
    },
    header: {
        paddingTop: 50,
        paddingBottom: 12,
        backgroundColor: AppColors.background,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: AppColors.textPrimary,
    },
    highlight: {
        color: AppColors.primary,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexGrow: 1,
    },
});
