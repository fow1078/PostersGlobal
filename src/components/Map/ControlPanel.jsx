import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


function ControlPanel({ data, onPinSelect }) {
  return (
    <div className='control-panel'>
      <h4 style={{fontFamily: 'Lato Regular', color: '#fff', marginBottom: '15px'}}>Posters Locations:</h4>
      <ul style={{paddingLeft: '0'}}>
        {data.map((uni, index) => {
          return <li key={index} className='uni-li-hover' style={{listStyleType: 'none', color: '#fff', fontSize: '16px', backgroundColor: '#2d2c2c', padding: '7px 15px', marginBottom: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', boxShadow: '1px 2px 2px 1px #00000038'}} onClick={() => onPinSelect(uni.longitude, uni.latitude)}>
              <div style={{ marginRight: '10px', backgroundColor: '#464646', padding: '3px', borderRadius: '10px', width: '30px', height: '30px', textAlign: 'center'}}><FontAwesomeIcon icon={faMapLocationDot} style={{color: '#fff'}} /> </div>{uni.name}
            </li>
        })}
      </ul>
    </div>
  )
}

export default ControlPanel;