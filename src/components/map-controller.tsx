import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface MapControllerProps {
  centerLatLon: [number, number];
  zoom: number;
}

export default function MapController({
  centerLatLon,
  zoom,
}: MapControllerProps) {
  const map = useMap();
  useEffect(() => {
    map.setView([centerLatLon[0], centerLatLon[1]], zoom);
  }, [centerLatLon, zoom]);
  return null;
}
