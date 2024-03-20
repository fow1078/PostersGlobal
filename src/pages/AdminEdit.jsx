import React, {useEffect, useState} from 'react'
import Header from '../components/Admin/Header'

import database from '../firebase_init';
import { ref, onValue } from 'firebase/database';

import '../AddNew.css'
import { checkAuthentication } from '../common/checkAuth';
import EditForm from '../components/Admin/EditForm';

function AdminEdit() {
  const id = window.location.href[window.location.href.length - 1]
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
        <EditForm data={data} id={id} />
      </div>
    </>
  )
}

export default AdminEdit