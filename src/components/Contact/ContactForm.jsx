import React from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'

// import { apikey } from '../../apikey'
import { sendEmail } from '../../common/sendEmail'

function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    sendEmail()
  }

  return (
    <div className='contact-form'>
      <h2 className='contact-title'>Don't see your school?</h2>
      <p className='contact-subtitle'>Send us a message to tell us about your organization and the Posters team will reach out!</p>
      <hr className='divider' />
      <form className='form' onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol xs={12} lg={6}>
            <input className='contact-input' type='text' placeholder='NAME' />
          </MDBCol>
          <MDBCol xs={12} lg={6}>
          <input className='contact-input' type='email' placeholder='EMAIL' />
          </MDBCol>
        </MDBRow>
        
        <input className='contact-input' type='text' placeholder='SUBJECT' />
        <textarea className='contact-input' style={{height: '75px'}} type='text' placeholder='MESSAGE' />
        <button type='submit' style={{width: '100%', backgroundColor: '#fff', border: 'none', padding: '3px 0', fontFamily: 'Lato Semibold', transition: '0.2s'}} className='contact-submit'>Submit</button>
      </form>
    </div>
  )
}
export default ContactForm