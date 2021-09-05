import { MapContainer, TileLayer, Marker } from 'react-leaflet';

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

    {places?.map(({ name, location, id }) => {
      const { latitude, longitude } = location;

      return <Marker title={name} key={id} position={[latitude, longitude]} />;
    })}
  </MapContainer>
);

export default Map;
