import { Location } from "../types/Location";

export const formatCoordinates = (location: Location): string => {
  const { latitude, longitude } = location.coordinates;
  return `Lat: ${latitude.toFixed(4)} | Lon: ${longitude.toFixed(4)}`;
};

export const getRouteBetweenPoints = async (
  origin: { latitude: number; longitude: number },
  destination: { latitude: number; longitude: number }
) => {

  return {
    distance: "2.5 km",
    duration: "8 mins",
    polyline: [],
  };
};