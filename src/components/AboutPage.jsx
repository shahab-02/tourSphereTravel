import React from 'react'
import aboutPageImage from '../assets/aboutPageImage.png'

function AboutPage() {
  return (
    <div className='font-montserrat flex flex-col lg:flex-row w-full p-8 lg:px-20 xl:px-30 lg:py-20 xl:py-30 mb-20 lg:mb-0'>
      <div className='order-2 lg:order-1 mt-10 lg:mt-0'>
         <img src={aboutPageImage} className='lg:pr-6 xl: object-cover'/>
      </div>
      <div className='lg:pl-6 pt-6 order-1 lg:order-2 mb-5 text-justify'>
        <h1 className='text-2xl xl:text-3xl font-semibold'>About us</h1>
        <p className='text-md xl:text-lg mt-3'>At Tour Sphere Travel, we believe that travel should be more than just a trip – it should be an unforgettable experience. Our mission is to make exploration easy, enjoyable, and accessible for all. Through our innovative mobile tour app and carefully curated vacation packages, we help travelers discover new places with confidence and ease.</p>

        <p className='text-md xl:text-lg mt-3'>
          With a team of travel enthusiasts and destination experts, we bring you insider knowledge, exclusive deals, and seamless travel planning. Whether you’re embarking on a self-guided adventure or booking a full vacation package, we’re here to turn your travel dreams into reality.
          <br /> <br />
          Let’s create memories together. 
        </p>
        <br />
        <p className='text-md xl:text-lg font-bold'>Explore with us today!</p>
      </div>
     
    </div>
  )
}

export default AboutPage
