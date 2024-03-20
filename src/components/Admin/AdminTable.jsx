import React, { useEffect, useState } from 'react'

import database from '../../firebase_init';
import { ref, set, onValue } from 'firebase/database';

import AdminRow from './AdminRow';

function AdminTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const dataRef = ref(database, '/');

  useEffect(() => {
    onValue(dataRef, (snapshot) => {
      const dbData = snapshot.val();
      setData(dbData || []);
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <>
      <h1 className='caption'>Locations</h1>
      <table className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
      
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">University Name</th>
            <th scope="col">Longitude</th>
            <th scope="col">Latitude</th>
            <th scope="col">Users</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((location) => (
            <AdminRow key={location.id} row={location} data={data} />
          ))}
        </tbody>
      </table>
      <nav style={{marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-li' style={{backgroundColor: '#737373', borderRadius: '5px', textAlign: 'center', verticalAlign: 'middle', margin: '0 4px'}}>
              <a onClick={(e) => {e.preventDefault(); paginate(number)}} className='page-link' style={{color: '#fff'}}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
    
  )
}

export default AdminTable