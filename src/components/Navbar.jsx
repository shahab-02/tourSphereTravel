import React from 'react'
import logo from '../assets/logo.png'




function Navbar() {
  return (
    // Nav Section
    <header className='flex bg-black justify-between w-full items-center p-4'>
      
        <a href="#home"><img src={logo} alt="Image Error" className='h-15 ml-15'/></a>
      
        <nav className=' text-white flex space-x-8 font-poppins'>
        <a href="#home" className= ' text-red-600 font-bold'>Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Travel Services</a>
        <a href="#vacation">Vacation Quote</a>
        </nav>
      
      <div className=' text-white '>
       <button className='bg-gradient-to-r from-[#F97150] to-[#FF668A]  mr-15 px-5 py-3 rounded-3xl font-poppins font-medium'>CONTACT US</button>
      </div>
    </header>
  )
}

export default Navbar
