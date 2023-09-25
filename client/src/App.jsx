import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';



function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>




      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="mt-14 font-bold  "

      />


    </>
  )
}

export default App
