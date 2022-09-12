import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../../components/about';
import Contact from '../../components/contact';
import Home from '../../components/home';

const Router = () => {
  return (
    <>
      <Routes> 
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          </Routes>
          
    </>
  )
}

export default Router