import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>

        <div className='bg-gray-900 py-2 fixed w-full text-center flex justify-between md:px-8 px-2 items-center text-white '>
            
              
                <Link to="/" className='md:text-2xl text-xl py-1 font-semibold'>Expense Tracker</Link>
                <div className='text-lg font-semibold flex  md:gap-7 gap-3 py-1'>
                    <Link to="/login" className='bg-blue-800 px-4 text-sm py-1' >Login</Link>                   
                    <Link to="/register" className='bg-blue-800 px-4 text-sm py-1' >Register</Link>
                    {/* <button className='bg-blue-800 px-4  text-sm py-1 ' >Logout</button> */}
                </div>

        </div>
    
    </>
  )
}
