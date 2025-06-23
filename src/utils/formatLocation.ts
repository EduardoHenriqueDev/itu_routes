import { Location } from "../types/Location";

export const formatCoordinates = (location: Location): string => {
  const { latitude, longitude } = location.coordinates;
  return `Lat: ${latitude.toFixed(4)} | Lon: ${longitude.toFixed(4)}`;
};

export const formatCoordinatesVerbose = (location: Location): string => {
  const { latitude, longitude } = location.coordinates;
  return `Latitude: ${latitude.toFixed(6)} | Longitude: ${longitude.toFixed(6)}`;
};