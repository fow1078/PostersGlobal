import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import MapA from './Map'
import ControlPanel from './ControlPanel'
import {useState, useEffect} from 'react';
import {useRef, useCallback} from 'react';
import { Marker } from 'react-map-gl';
import database from '../../firebase_init';
import { ref, onValue } from 'firebase/database';
import Pin from '../../pin.jsx';


function MapSection() {
  const [popupInfo, setPopupInfo] = useState(null);

  const [data, setData] = useState([]);
  const dataRef = ref(database, '/');
  useEffect(() => {
    onValue(dataRef, (snapshot) => {
      const dbData = snapshot.val();
      setData(dbData || []);
    });
  }, []);

  const mapRef = useRef();
  const onSelectUniversity = useCallback((longitude, latitude) => {
    mapRef.current?.flyTo({center: [longitude, latitude], duration: 2000, zoom: 9});
  }, []);

  const pins = data.map((uni, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={uni.longitude}
      latitude={uni.latitude}
      anchor="bottom"
      onClick={e => {
        e.originalEvent.stopPropagation();
        setPopupInfo(uni);
      }}
    >
      <Pin />
    </Marker>
  ))
  
  return (
    <div className='map-section'>
      <div className='title-box' style={{width: '100%', display: 'flex', flexDirection: 'column', margin: '20px 0 40px 0', justifyItems: 'center', alignItems: 'center'}}>
        <h2 className='map-title'>Explore Our App Network</h2>
        <p className='map-subtitle'>Navigate our interactive map to discover universities where Posters is actively used, highlighted by pinpointed locations.</p>
      </div>
      <MDBContainer>
        <MDBRow>
          <MDBCol xs={12} lg={7} className='mb-2'>
            <MapA pins={pins} refer={mapRef} popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
          </MDBCol>
          <MDBCol xs={12} lg={5}>
            <ControlPanel data={data} onPinSelect={onSelectUniversity} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default MapSection