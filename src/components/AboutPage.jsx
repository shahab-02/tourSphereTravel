import React from 'react'
import aboutPageImage from '../assets/aboutPageImage.png'

function AboutPage() {
  return (
    <div className='font-montserrat flex flex-col lg:flex-row w-full p-8 lg:px-12 lg:py-30'>
      <div className=''>
         <img src={aboutPageImage} className='h-40 object-cover'/>
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>About us</h1>
        <p>At Tour Sphere Travel, we believe that travel should be more than just a trip – it should be an unforgettable experience. Our mission is to make exploration easy, enjoyable, and accessible for all. Through our innovative mobile tour app and carefully curated vacation packages, we help travelers discover new places with confidence and ease.</p>
        <p>
          With a team of travel enthusiasts and destination experts, we bring you insider knowledge, exclusive deals, and seamless travel planning. Whether you’re embarking on a self-guided adventure or booking a full vacation package, we’re here to turn your travel dreams into reality.

          Let’s create memories together. 
        </p>
      </div>
     
    </div>
  )
}

export default AboutPage
