import React from 'react'
import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import { sendEmail } from '../../common/sendEmail'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailData = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value
    }
    sendEmail(emailData)

    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""

    toast.success('Request was sent! \n We will answer you soon!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }

  return (
    <>
      <ToastContainer />
      <div className='contact-form'>
        <h2 className='contact-title'>Don't see your school?</h2>
        <p className='contact-subtitle'>Send us a message to tell us about your organization and the Posters team will reach out!</p>
        <hr className='divider' />
        <form className='form' onSubmit={handleSubmit} autoComplete='off'>
          <MDBRow>
            <MDBCol xs={12} lg={6}>
              <input className='contact-input' autoComplete="off" type='text' placeholder='NAME' />
            </MDBCol>
            <MDBCol xs={12} lg={6}>
            <input className='contact-input' autoComplete="off" type='email' placeholder='EMAIL' />
            </MDBCol>
          </MDBRow>
          
          <input className='contact-input' autoComplete="off" type='text' placeholder='SUBJECT' />
          <textarea className='contact-input' autoComplete="off" style={{height: '75px'}} type='text' placeholder='MESSAGE' />
          <button type='submit' style={{width: '100%', backgroundColor: '#fff', border: 'none', padding: '3px 0', fontFamily: 'Lato Semibold', transition: '0.2s'}} className='contact-submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
export default ContactForm