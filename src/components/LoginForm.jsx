import React from 'react'

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function LoginForm() {
  const [loginError, setLoginError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === process.env.REACT_APP_ADMIN_LOGIN && password === process.env.REACT_APP_ADMIN_PASSWORD) {
      const expirationTime = new Date().getTime() + 30 * 60 * 1000;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('sessionExpiration', expirationTime.toString());
      window.location.replace("/admin");
    } else {
      setLoginError(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color: '#fff'}} labelClass='text-white' label='Email address' id='username' type='email' size="lg" onKeyDown={handleKeyPress}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color: '#fff'}} labelClass='text-white' label='Password' id='password' type='password' size="lg"  onKeyDown={handleKeyPress}/>

        {loginError && <p style={{ color: 'red' }}>Invalid username or password</p>}

        <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={(e) => {handleSubmit(e)}}>
          Login
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default LoginForm