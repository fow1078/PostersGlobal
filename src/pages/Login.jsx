import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
}from 'mdb-react-ui-kit';
import LoginForm from '../components/LoginForm';

function Login() {
  React.useEffect(() => {
    document.body.style.background = "#453b7d"
  }, [])
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <LoginForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login