import React, {useEffect, useState} from 'react'

import { MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import database from '../../firebase_init';
import { ref, set, onValue } from 'firebase/database';

function AddNewForm({data}) {
  const dataRef = ref(database, '/');
	const updateData = (newData) => {
    set(dataRef, newData)
      .then(() => alert('Data updated successfully'))
      .catch((error) => alert('Failed to update data: ' + error));
  };
  
  const handleAdd = (e) => {
    e.preventDefault();
    const university = document.getElementById('university-name').value 
    const street = document.getElementById('street').value 
    const longitude = document.getElementById('longitude').value 
    const latitude = document.getElementById('latitude').value 
    const users = document.getElementById('users').value 
    const newLocation = {
      id: data.length + 1,
      name: university,
      latitude: latitude,
      longitude: longitude,
      users: users,
      street: street
    }
    const updatedData = [...data, newLocation]
    updateData(updatedData)
    window.location.replace('/admin')
  }

  const handleBack = (e) => {
    e.preventDefault()
    window.location.replace('/admin')
  }

  return (
    <>
    <MDBRow style={{marginBottom: '15px'}}>
      <MDBCol xs={12} lg={6} style={{marginBottom: '15px'}}> 
        <MDBInput id='university-name' label='Name' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} />
      </MDBCol>
      <MDBCol xs={12} lg={6}>
        <MDBInput id='street' label='Street' type='text' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} />
      </MDBCol>
    </MDBRow>

    <MDBRow style={{marginBottom: '15px'}}>
      <MDBCol xs={12} lg={4} style={{marginBottom: '15px'}}>
        <MDBInput id='longitude' label='Longitude' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} />
      </MDBCol>
      <MDBCol xs={12} lg={4} style={{marginBottom: '15px'}}>
        <MDBInput id='latitude' label='Latitude' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} />
      </MDBCol>
      <MDBCol xs={12} lg={4} style={{marginBottom: '15px'}}>
        <MDBInput id='users' label='Number of users' style={{color: '#fff'}} type='email' labelStyle={{color: '#b3b3b3'}} />
      </MDBCol>
    </MDBRow>

    <MDBRow style={{marginBottom: '10px'}}>
      <MDBCol xs={12}> 
        <MDBBtn style={{width: '100%'}} onClick={handleAdd}>ADD</MDBBtn>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol xs={12}> 
        <MDBBtn style={{width: '100%', backgroundColor: '#fff', color: '#000'}} onClick={handleBack}>BACK</MDBBtn>
      </MDBCol>
    </MDBRow>
  </>
  )
}

export default AddNewForm;