import React from 'react'
import googlePlaystoreLogo from '../assets/googlePlaystoreLogo.svg'
import appleStore from '../assets/appleStore.svg'
import instagramLogo from '../assets/instagramLogo.svg'
import facebookLogo from '../assets/facebookLogo.svg'
import whatsappLogo from '../assets/whatsappLogo.svg'
import youtubeLogo from '../assets/youtubeLogo.svg'

function Footer() {
  return (
      <footer className='w-full h-full  bg-[#161616] font-montserrat'>
      <div className="flex justify-between  flex-col lg:flex-row lg:flex-1 text-white p-6 lg:pt-20 pb-20 relative overflow-hidden">
        <div className='h-100 w-100 text-gray-600 rounded-full border-4 absolute opacity-20 top-[-130px] left-[-80px] '></div>
        <div className='h-100 w-100 text-gray-600 rounded-full border-4 absolute opacity-20 top-[-130px] left-[100px] '></div>
        {/* left div */}
        <div className='lg:pl-10 relative'>

          <div>
            <h1 className='text-3xl xl:text-4xl '>Download our app for free</h1>
          </div>
          <div className='flex space-x-4 '>
          <a href='#'>
             <button className='lg:h-10 xl:h-12 mt-6 lg:mt-10 bg-black rounded-full shadow-2xl px-4 md:px-8 py-2 md:py-4 lg:px-6 lg:py-2'>
             <img src={appleStore} className='h-full w-full  object-cover'/>
            </button>
          </a>
          <a href='#'>
            <button className='lg:h-10 xl:h-12 mt-6 lg:mt-10 bg-black rounded-full shadow-2xl px-4 md:px-8 py-2 md:py-4 lg:px-6 lg:py-2'>
            <img src={googlePlaystoreLogo} className='h-full w-full  object-cover'/>
            </button>
          </a>      
            </div> 
        </div>
        {/* Right Div */}
        <div className='lg:pr-10'>
          <h1 className='text-2xl xl:text-3xl font-medium pt-8 lg:pt-0'>Newsletter</h1>
          <div className='pt-4 flex font-poppins'>
            <input type="text" placeholder='you@company.com' className='bg-[#313131]  px-4 py-2 lg:px-6 lg:py-4 font-medium  w-full placeholder:text-md placeholder:text-white placeholder:opacity-40 lg:placeholder:text-lg' />
            <a href="#"><button className='bg-[#E9584B] px-4 py-4 lg:px-6 lg:py-4 font-medium opacity-60  text-sm lg:text-lg w-full '>SUBSCRIBE</button></a>
          </div>
          <h2 className='pt-4 text-md text-right font-semibold'>Coming Soon!</h2>
        </div> 
      </div>
      <div className='flex p-6 lg:p-4 gap-x-4 border-t-1 lg:border-t-2 w-full text-gray-300 items-center justify-center '>
        <img src={facebookLogo} className='h-12 w-auto'/>
        <img src={instagramLogo} className='h-12 w-auto' />
        <img src={youtubeLogo} className='h-12 w-auto' />
        <img src={whatsappLogo} className='h-12 w-auto' />
      </div>
      </footer>
      
  )
}

export default Footer
