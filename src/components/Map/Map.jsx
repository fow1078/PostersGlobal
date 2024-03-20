import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

function MapA({ pins, refer, popupInfo, setPopupInfo }) {
  return (
    <>
      <Map
        ref={refer}
        mapboxAccessToken={process.env.VITE_MAP_API_KEY}
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        style={{width: '100%', height: 450}}

      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.name}, {popupInfo.users} users |{' '}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.name}`}
              >
                Learn More
              </a>
            </div>
          </Popup>
        )}
      </Map>
    </>
  )
}

export default MapA;