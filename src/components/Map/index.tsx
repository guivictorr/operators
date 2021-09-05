import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import * as L from 'leaflet';

export type Place = {
  id: string;
  name: string;
  slug: string;
  icon: {
    url: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = {
  places?: Place[];
};

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ name, location, id, icon }) => {
      const { latitude, longitude } = location;
      const customIcon = L.icon({
        iconUrl: icon.url,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });
      return (
        <Marker
          title={name}
          key={id}
          position={[latitude, longitude]}
          icon={customIcon}
        />
      );
    })}
  </MapContainer>
);

export default Map;
