import React, { useEffect, useState } from 'react'

import Header from '../components/Admin/Header';
import AdminTable from '../components/Admin/AdminTable';
import AddNewBtn from '../components/Admin/AddNewBtn';
import { checkAuthentication } from '../common/checkAuth';

function AdminPanel() {
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
      <div style={{padding: "120px 30px"}}>
        <AddNewBtn />
        <AdminTable />
      </div>
    </>
  )
}

export default AdminPanel