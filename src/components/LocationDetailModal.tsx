import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Location } from "../types/Location";
import { formatCoordinatesVerbose } from "../utils/formatLocation";
import MiniMap from "./MiniMap";
import AppColors from "../constants/AppColors";
import { X, MapPin } from "lucide-react-native";

type LocationDetailModalProps = {
  visible: boolean;
  location: Location | null;
  onClose: () => void;
};

const LocationDetailModal: React.FC<LocationDetailModalProps> = ({
  visible,
  location,
  onClose,
}) => {
  if (!location) return null;

  const openInGoogleMaps = () => {
    const lat = location.coordinates.latitude;
    const lon = location.coordinates.longitude;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
    Linking.openURL(url);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <X size={30} color={AppColors.textPrimary} />
            </TouchableOpacity>
          </View>

          <Image source={location.image} style={styles.image} />
          <Text style={styles.title}>{location.name}</Text>
          <Text style={styles.subtitle}>
            {formatCoordinatesVerbose(location)}
          </Text>

          <MiniMap location={location} height={150} />

          {/* Botão com gradiente */}
          <TouchableOpacity
            onPress={openInGoogleMaps}
            style={styles.buttonWrapper}
          >
            <LinearGradient
              colors={["#4285F4", "#34A853", "#FBBC05", "#EA4335"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.mapsButton}
            >
              <MapPin size={20} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.mapsButtonText}>Como Chegar</Text>
            </LinearGradient>
          </TouchableOpacity>
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
  },
  header: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 8,
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
  buttonWrapper: {
    width: "100%",
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 12,
  },
  mapsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  mapsButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});