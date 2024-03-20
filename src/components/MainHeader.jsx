import React from 'react'
import StarLogo from '../assets/images/postersstar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function MainHeader() {
  const handleContactClick = (e) => {
    e.preventDefault()
    window.location.href = "#contact-anchor"
  }
  return (
    <div className="mainheader" style={{position: 'fixed', width: '100%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px'}}>
      <img src={StarLogo} style={{width: '40px', height: '40px'}} />
      <button onClick={handleContactClick} className='mainheader-btn' style={{width: '130px', height: '30px', backgroundColor: '#fff', borderRadius: '4px', border: 'none', textTransform: 'uppercase', display: 'flex', fontSize: '14px', justifyContent: 'space-evenly', alignItems: 'center'}}>Contact Us <FontAwesomeIcon icon={faArrowRight} style={{fontSize: '12px'}} /></button>
    </div>
  )
}

export default MainHeader