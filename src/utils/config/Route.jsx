import React from 'react'
import { Routes, Route } from "react-router-dom";

import Ourmission from '../../pages/Ourmission';
import Profile from '../../pages/Profile';
import About from "../../pages/about"
import Contact from "../../pages/contact"
const NavRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ourmission" element={<Ourmission />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>

    </>
  )
}

export default NavRouter