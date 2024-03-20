import React, {useEffect, useState} from 'react'
import Header from '../components/Admin/Header'
import AddNewForm from '../components/Admin/AddNewForm';

import database from '../firebase_init';
import { ref, onValue } from 'firebase/database';

import '../AddNew.css'
import { checkAuthentication } from '../common/checkAuth';


function AdminAddNew() {
  const [data, setData] = useState([]);
  const dataRef = ref(database, '/');
  useEffect(() => {
    onValue(dataRef, (snapshot) => {
      const dbData = snapshot.val();
      setData(dbData || []);
    });
  }, []);


  const isAuthenticated = checkAuthentication();
  if (!isAuthenticated) {
    window.location.replace("/admin/login")
  }

  useEffect(() => {
    document.body.style.background = "#1c1b1b"
  }, [])

  return (
    <>
      <Header />
      <div style={{color: '#fff', fontSize: '18px', padding: "120px 25px"}}>
        <AddNewForm data={data} />
      </div>
    </>
  )
}

export default AdminAddNew

