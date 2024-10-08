import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MapController from "./map-controller";
import { Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  centerLatLon?: [number, number];
  zoom?: number;
  markers?: {
    lat: number;
    lon: number;
  }[];
}

export default function Map({ centerLatLon = [0, 0], zoom = 3, markers }: MapProps) {
  const icon = L.icon({ iconUrl: '/leaflet-images/marker-icon.png' });

  return (
    <div className="absolute h-full w-full top-0 left-0 -z-1">
      <MapContainer
        center={centerLatLon}
        zoom={zoom}
        scrollWheelZoom={true}
        className="flex-grow h-full w-full"
      >

        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />

        {markers?.map((marker) => (
          <Marker key={`${marker.lat}-${marker.lon}`} position={[marker.lat, marker.lon]} icon={icon} />
        ))}

        <MapController centerLatLon={centerLatLon} zoom={zoom} />
      </MapContainer>
    </div>
  );
}
