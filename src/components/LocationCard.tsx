import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Location } from "../types/Location";
import AppColors from "../constants/AppColors";

type LocationCardProps = {
  location: Location;
  onPress: () => void;
};

const LocationCard: React.FC<LocationCardProps> = ({ location, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={location.image} style={styles.image} />
      <Text style={styles.category}>{location.category}</Text>
      <Text style={styles.title}>{location.name}</Text>
      <Text style={styles.subtitle}>{location.address}</Text>
    </TouchableOpacity>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.cardBackground,
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: AppColors.primary,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: AppColors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    color: AppColors.textSecondary,
    fontSize: 14,
  },
});