import React from "react";
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Location } from "../types/Location";
import { formatCoordinatesVerbose } from "../utils/formatLocation";
import MiniMap from "./MiniMap";
import AppColors from "../constants/AppColors";
import { X } from "lucide-react-native";

type LocationDetailModalProps = {
    visible: boolean;
    location: Location | null;
    onClose: () => void;
};

const LocationDetailModal: React.FC<LocationDetailModalProps> = ({ visible, location, onClose }) => {
    if (!location) return null;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContent}>

                    {/* Botão X no canto */}
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <X size={50} />
                    </TouchableOpacity>

                    {/* Conteúdo */}
                    <Image source={location.image} style={styles.image} />
                    <Text style={styles.title}>{location.name}</Text>
                    <Text style={styles.subtitle}>{formatCoordinatesVerbose(location)}</Text>

                    {/* Mini Mapa */}
                    <MiniMap location={location} height={150} />

                </View>
            </View>
        </Modal>
    );
};

export default LocationDetailModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: AppColors.cardBackground,
        borderRadius: 8,
        padding: 16,
        width: "85%",
        alignItems: "center",
        position: "relative",
    },
    closeIcon: {
        position: "absolute",
        top: 8,
        right: 8,
        padding: 8,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: AppColors.textPrimary,
    },
    subtitle: {
        color: AppColors.textSecondary,
        marginBottom: 16,
        textAlign: "center",
    },
});
