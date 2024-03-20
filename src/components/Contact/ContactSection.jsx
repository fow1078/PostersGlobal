import React from 'react'
import ContactForm from './ContactForm'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'

function ContactSection() {
  return (
    <div className='section' id='contact-anchor'>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg={8} offsetLg={2} className='contact-col'>
            <ContactForm />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default ContactSection