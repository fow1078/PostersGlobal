import React from 'react'

import database from '../../firebase_init';
import { ref, set, onValue } from 'firebase/database';

import "../../LocationsTable.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function AdminRow({row, data}) {
	const dataRef = ref(database, '/');
	const updateData = (newData) => {
    set(dataRef, newData)
      .then(() => alert('Data updated successfully'))
      .catch((error) => alert('Failed to update data: ' + error));
  };

	const handleRemove = (e, id) => {
		e.preventDefault()
		const filteredData = data.filter(elem => elem.id != id)
		const updatedData = filteredData.map((elem, ind) => {
			return {
				id: ind + 1,
				name: elem.name,
				latitude: elem.latitude,
				longitude: elem.longitude,
				users: elem.users,
				address: elem.address
			}
		})
		updateData(updatedData)
	}

	const handleEdit = (e, id) => {
		e.preventDefault()
		window.location.replace(`/admin/edit/${id}`)
	}

  return (
    <tr>
			<th scope="row">{row.id}.</th>
			<td data-label="University Name">{row.name}</td>
			<td data-label="Address">{row.address}</td>
			<td data-label="Users">{row.users}</td>
      <td className='edit-column'><button className='edit-btn' style={{backgroundColor: 'rgb(60 60 60)', color: "#fff", border: '1px solid #ffffff', borderRadius: '7px', padding: '10px 15px'}} onClick={(e) => {handleEdit(e, row.id)}}> <FontAwesomeIcon icon={faPenToSquare} /></button></td>
      <td className='remove-column'><button className='remove-btn' style={{backgroundColor: '#740a0a', color: "#fff", border: '1px solid #ffffff', borderRadius: '7px', padding: '10px 15px'}} onClick={(e) => {handleRemove(e, row.id)}}>X</button></td>
		</tr>
  )
}

export default AdminRow