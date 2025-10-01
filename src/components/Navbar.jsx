import React, { useState }  from 'react'
import logo from '../assets/logo.png'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link, NavLink} from 'react-router-dom';





function Navbar() {

  const [open, setOpen] = useState(false);
  return (

   
    <header className='flex bg-[#000000] opacity-90 justify-between w-full items-center p-4'>
      
        <Link to= "/">
        <img src={logo} alt="Image Error" className='h-12 ml-4 md:h-14 md:ml-14 '/>
        </Link>

        {/* Nav Section All Desktop */}

        <nav className='hidden text-white lg:flex space-x-8 font-poppins '>
        <div>
          <NavLink to= "/" className={({isActive}) => `${isActive ? "text-[#E94132] font-bold" : ""}` }>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to= "/about" className={({isActive}) => `${isActive ? "text-[#E94132] font-bold" : ""}` }>About Us</NavLink>
        </div>
        <div>
          <Link>Travel Services</Link>
        </div>
        <div>
          <Link>Vacation Quote</Link>
        </div>
        </nav>
      
      <div className='hidden lg:flex text-white '>
       <Link to= "contact"><button className='bg-gradient-to-r from-[#F97150] to-[#FF668A]  
       mr-15 px-5 py-3 rounded-3xl font-poppins font-medium '>CONTACT US</button></Link>
      </div>  
      {/* Tab/Mobile Nav */}
      <button className='text-white lg:hidden mr-4 md:mr-14 ' onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon className='h-8 w-8'/> :
        <Bars3Icon className='h-8 w-8'/>
        }
      </button>
      {open && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 font-poppins lg:hidden">
          <div>
          <NavLink to= "/" className={({isActive}) => `${isActive ? "text-[#E94132] font-bold" : ""}` }>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to= "/about" className={({isActive}) => `${isActive ? "text-[#E94132] font-bold" : ""}` }>About Us</NavLink>
        </div>
        <div>
          <Link>Travel Services</Link>
        </div>
        <div>
          <Link>Vacation Quote</Link>
        </div>
        <Link to= "contact"><button className='bg-gradient-to-r from-[#F97150] to-[#FF668A] px-6 py-4 rounded-3xl font-poppins font-medium '>CONTACT US</button></Link>
          
        </nav>
      )}
    </header>
  )
}

export default Navbar
