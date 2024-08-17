import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

export default function Map({ center = [0, 0], zoom = 3 }: MapProps) {
  return (
    <div
      className="absolute h-full w-full top-0 left-0 -z-1"
      style={{ zIndex: -1 }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="flex-grow h-full w-full"
      >
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        <Marker position={[0, 0]}>
          <Popup>Test Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
