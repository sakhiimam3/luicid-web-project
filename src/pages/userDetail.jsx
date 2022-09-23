import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetail = () => {
    const {id}=useParams()

   
  return (
    <>
       <div style={{height:"100vh",width:'100%',backgroundColor:"gray",}} className="d-flex justify-content-center align-items-center">
                <h1 className='text-light'>Welcome ID-Number : {id}</h1>
       </div>
    </>
  )
}

export default UserDetail