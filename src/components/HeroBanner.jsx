import React from 'react'

import PostersLogo from '../assets/images/white-logo-simplified.svg'
import AppStoreLogo from '../assets/images/appstorelogo.svg'


function HeroBanner() {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '20px 40px'}}>
      <img className='herobanner-logo' src={PostersLogo} width={'300px'} />
      <h2 className='herobanner-title' style={{color: '#fff', paddingRight: '8px'}}>Welcome to Posters for iOS</h2>
      <a href='#'><img src={AppStoreLogo} width={'175px'} /></a>
    </div>
  )
}

export default HeroBanner