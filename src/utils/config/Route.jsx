import React from 'react';
import { Routes, Route,} from "react-router-dom";
import Home from '../../pages/home';
import Profile from '../../pages/Profile';
import UserDetail from '../../pages/userDetail';
const NavRouter = () => {



   

  return (
    <>
   
      <Routes>
        <Route path="/profile" element={<Profile />}  />
        <Route path="/profile/userDeatl/:id" element={<UserDetail />}  /> 
        <Route  path="/"  element={<Home  />} />
      
      
      </Routes>

    </>
  )
}

export default NavRouter