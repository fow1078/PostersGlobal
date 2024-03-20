import React, {useEffect, useState} from 'react'

import { MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import database from '../../firebase_init';
import { ref, set, onValue } from 'firebase/database';

import { checkAuthentication } from '../../common/checkAuth';


function EditForm({data, id}) {
  const [university, setUniversity] = useState('');
  const [street, setStreet] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [users, setUsers] = useState('');

  const [item, setItem] = useState(null)
  const dataRef = ref(database, '/');
	const updateData = (newData) => {
    set(dataRef, newData)
      .then(() => alert('Data updated successfully'))
      .catch((error) => alert('Failed to update data: ' + error));
  };

  const isAuthenticated = checkAuthentication();
  if (!isAuthenticated) {
    window.location.replace("/admin/login")
  }
  const handleEdit = (e) => {
    e.preventDefault();
    const university = document.getElementById('university-name').value 
    const street = document.getElementById('street').value 
    const longitude = document.getElementById('longitude').value 
    const latitude = document.getElementById('latitude').value 
    const users = document.getElementById('users').value 
    const updatedData = [...data]
    updatedData[id - 1].name = university
    updatedData[id - 1].street = street,
    updatedData[id - 1].latitude = latitude,
    updatedData[id - 1].longitude = longitude,
    updatedData[id - 1].users = users
    updateData(updatedData)
    window.location.replace('/admin')
  }

  useEffect(() => {
    const current = data.find(el => el.id == id)
    setItem(current)
  }, [data])

  useEffect(() => {
    if (item != null) {
      setUniversity(item.name)
      setLongitude(item.longitude)
      setLatitude(item.latitude)
      setUsers(item.users)
      setStreet(item.street)
    }
  }, [item])

  const handleBack = (e) => {
    e.preventDefault()
    window.location.replace('/admin')
  }

  return (
    <>
    <MDBRow style={{marginBottom: '15px'}}>
      <MDBCol xs={12} lg={6} style={{marginBottom: '15px'}}> 
        <MDBInput id='university-name' label='Name' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} value={university} onChange={(e) => {setUniversity(e.target.value)}} />
      </MDBCol>
      <MDBCol xs={12} lg={6}>
        <MDBInput id='street' label='Street' type='text' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} value={street} onChange={(e) => {setStreet(e.target.value)}} />
      </MDBCol>
    </MDBRow>

    <MDBRow style={{marginBottom: '15px'}}>
      <MDBCol xs={12} lg={4} style={{marginBottom: '15px'}}>
        <MDBInput id='longitude' label='Longitude' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} value={longitude} onChange={(e) => {setLongitude(e.target.value)}}  />
      </MDBCol>
      <MDBCol xs={12} lg={4} style={{marginBottom: '15px'}}>
        <MDBInput id='latitude' label='Latitude' style={{color: '#fff'}} labelStyle={{color: '#b3b3b3'}} value={latitude} onChange={(e) => {setLatitude(e.target.value)}}  />
      </MDBCol>
      <MDBCol xs={12} lg={4} style={{marginBottom: '15px'}}>
        <MDBInput id='users' label='Number of users' style={{color: '#fff'}} type='email' labelStyle={{color: '#b3b3b3'}} value={users} onChange={(e) => {setUsers(e.target.value)}}  />
      </MDBCol>
    </MDBRow>

    <MDBRow style={{marginBottom: '10px'}}>
      <MDBCol xs={12}> 
        <MDBBtn style={{width: '100%'}} onClick={handleEdit}>EDIT</MDBBtn>
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

export default EditForm;