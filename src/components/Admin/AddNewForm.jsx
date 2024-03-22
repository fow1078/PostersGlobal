import React, {useEffect, useState} from 'react'

import { MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import database from '../../firebase_init';
import { ref, set, onValue } from 'firebase/database';
import { getCoords } from '../../common/getCoords';

function AddNewForm({data}) {
  const dataRef = ref(database, '/');
	const updateData = (newData) => {
    set(dataRef, newData)
      .then(() => alert('Data updated successfully'))
      .catch((error) => alert('Failed to update data: ' + error));
  };
  
  const handleAdd = async (e) => {
    e.preventDefault();
    const university = document.getElementById('university-name').value 
    const address = document.getElementById('address').value 
    const users = document.getElementById('users').value 
    const coords = await getCoords(address)

    
    const newLocation = {
      id: data.length + 1,
      name: university,
      latitude: coords[0],
      longitude: coords[1],
      address: address,
      users: users
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
      <MDBCol xs={12} lg={6} style={{marginBottom: '15px'}}>
        <MDBInput id='users' label='Number of users' style={{color: '#fff'}} type='email' labelStyle={{color: '#b3b3b3'}} />
      </MDBCol>
    </MDBRow>

    <MDBRow style={{marginBottom: '15px'}}>
      <MDBCol xs={12} style={{marginBottom: '15px'}}>
        <MDBInput id='address' label='Address' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} />
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