import React from 'react'
import contactPageIamge from '../assets/contactPageImage.png'
function ContactPage() {
  return (
    <div className='font-montserrat flex flex-col lg:flex-row w-full p-8 pb-30  lg:px-12 lg:py-30 lg:justify-around'>
      <div className='order-2 lg:order-1'>
        <img src={contactPageIamge} className='lg:h-130 xl:h-150 w-auto object-cover' />
      </div>
        <form className='space-y-4 mt-8 order-1 lg:order-2'>
          <h3 className='text-[#E9584B] font-semibold'>Contact us</h3>
          <h1 className='text-[#101828] font-semibold text-3xl'>Get in touch</h1>
          <h4 className='text-[#667085] lg:text-md'>We’d love to hear from you. Please fill out this form.</h4>
          <div className='flex flex-col lg:flex-row mt-3 lg:space-x-6'>
            <div className='flex flex-col space-y-1'>
            <label className='text-[#344054] font-medium'>First Name</label>
            <input type="text" placeholder='First Name' className='border border-gray-300 rounded-lg w-full lg:w-50 xl:w-60 px-4 py-3 placeholder:text-md placeholder:font-medium placeholder:text-[#667085]'/>
          </div>
          <div className='flex flex-col space-y-1'>
            <label className='text-[#344054] font-medium'>Last Name</label>
            <input type="text" placeholder='Last Name' className='border border-gray-300 rounded-lg w-full lg:w-50 xl:w-60 px-4 py-3 placeholder:text-md placeholder:font-medium placeholder:text-[#667085]'/>
          </div>
          </div>
          <div className='flex flex-col space-y-1 mt-3'>
            <label className='text-[#344054] font-medium'>Email</label>
            <input type="text" placeholder='you@company.com' className='border border-gray-300 rounded-lg w-full lg:w-106 xl:w-126 px-4 py-3 placeholder:text-md placeholder:font-medium placeholder:text-[#667085]' />
          </div>
          <div className='flex flex-col space-y-1 mt-3'>
            <label className='text-[#344054] font-medium'>Message</label>
            <textarea type="text-area" className='border border-gray-300 rounded-lg w-full lg:w-106 xl:w-126 px-4 py-3' />
          </div>
          <a href="#">
            <button className='mt-3 text-xl lg:text-2xl text-white font-poppins font-bold bg-[#E9584B] rounded-4xl w-full lg:w-106 xl:w-126 py-3 mb-10'>SEND</button>
          </a>
          
        </form>
     
    </div>
    
  )
}

export default ContactPage
