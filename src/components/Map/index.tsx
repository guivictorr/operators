import { useRouter } from 'next/router';
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

const Map = ({ places }: MapProps) => {
  const router = useRouter();

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${process.env.NEXT_PUBLIC_MAPBOX_USER_ID}/${process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />

      {places?.map(({ name, location, id, icon, slug }) => {
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
            eventHandlers={{
              click: () => router.push(`/${slug}`)
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
