import React from 'react'

import PostersLogo from '../assets/images/white-logo-simplified.svg'
import AppStoreLogo from '../assets/images/appstore.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons'


function HeroBanner() {
  return (
    <div style={{height: '98vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '20px 40px', position: 'relative'}}>
      <img className='herobanner-logo' src={PostersLogo} width={'300px'} />
      <h2 className='herobanner-title' style={{color: '#fff', paddingRight: '8px'}}>Welcome to Posters for iOS</h2>
      <a href='#' style={{cursor: 'not-allowed', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '7px'}}> <FontAwesomeIcon icon={faLock} style={{fontSize: '36px', marginRight: '10px', color: '#a4a2a2'}} /> <img src={AppStoreLogo} width={'175px'} /></a>
      <p style={{fontFamily: 'Lato Italic', fontSize: '18px', marginTop: '10px', color: '#8a8a8a'}}>Coming soon to the App Store</p>
      <a href='#map'  className='showmore' style={{color: '#000'}}><FontAwesomeIcon icon={faArrowDownLong} /></a>
    </div>
  )
}

export default HeroBanner