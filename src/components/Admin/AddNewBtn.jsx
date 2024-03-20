import React from 'react'

function AddNewBtn() {
  const handleClick = () => {
    window.location.replace('/admin/add')
  }
  return (
    <div style={{width: '50px', height: '50px', position: "fixed", bottom: '20px', right: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5c5c5c', borderRadius: '25px', color: '#fff', fontSize: '18px', lineHeight: '0', border: '2px solid white', cursor: 'pointer'}} onClick={(e) => {e.preventDefault(); handleClick()}}>
        +
    </div>
  )
}

export default AddNewBtn