import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Location } from "../types/Location";
import MiniMap from "./MiniMap";
import AppColors from "../constants/AppColors";
import { X, MapPin } from "lucide-react-native";
import Modal from "react-native-modal";

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
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropTransitionOutTiming={0}
      useNativeDriver
      style={styles.modal}
    >
      <View style={styles.modalContent}>

        <View style={styles.header}>
          <Text style={styles.category}>{location.category}</Text>
          <TouchableOpacity onPress={onClose}>
            <X size={30} color={AppColors.textPrimary} />
          </TouchableOpacity>
        </View>

        <Image source={location.image} style={styles.image} />
        <Text style={styles.title}>{location.name}</Text>

        <Text style={styles.subtitle}>{location.address}</Text>

        <MiniMap location={location} height={150} />

        <TouchableOpacity onPress={openInGoogleMaps} style={styles.buttonWrapper}>
          <View style={styles.mapsButton}>
            <MapPin size={20} color={AppColors.textPrimary} style={{ marginRight: 8 }} />
            <Text style={[styles.mapsButtonText, { color: AppColors.textPrimary }]}>
              Como Chegar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default LocationDetailModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    color: AppColors.primary,
    alignSelf: "flex-start",
    marginBottom: 4,
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
    marginBottom: 4,
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
    gap: 8,
  },
  mapsButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
