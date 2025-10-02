import React from 'react'
import Card from './Card'
import Egypt from '../../assets/CardImages/Egypt.png'
import Panama from '../../assets/CardImages/Panama.png'
import PuertoRico from '../../assets/CardImages/PuertoRico.png'
import Bali from '../../assets/CardImages/Bali.png'
import NewYork from '../../assets/CardImages/NewYork.png'

function SelfGuidedTours() {
  return (
    <div className='font-montserrat  p-6  py-16 lg:p-14  text-lg'>
      <h1 className='font-bold text-3xl text-[#E9584B] text-center lg:text-left'>Travel <span className='text-black'>Services</span></h1> 
      <h1 className='font-bold text-4xl text-[#E9584B] pt-12'>Tailored-<span className='text-black'>Getaways for Every Traveler</span></h1>
      <p className='pt-4'>Discover vacation packages designed for groups, families, couples, and solo travelers. Whether you seek a relaxing beach retreat, an adventurous mountain escape, or a vibrant city exploration, we have the perfect package for you. Each itinerary is crafted with care to include must-see attractions, local experiences, and seamless travel arrangements.</p>
      <p className='text-md pt-4'>Ready to plan your trip? Browse our packages and let’s make your dream vacation a reality.</p>
      {/* Trips */}
      <h1 className='font-bold text-4xl text-[#E9584B] pt-12'>My<span className='text-black'>   Trips</span></h1>
      {/* Cards */}
      <div className='flex space-x-6'>
        <Card country = "Egypt" Image = {Egypt} />
        <Card country = "Panama" Image = {Panama} />
        <Card country = "Puerto Rico" Image = {PuertoRico} />
        <Card country = "Bali" Image = {Bali} />
       
        
      </div>
      <h1 className='font-bold text-4xl text-[#E9584B] pt-12'>Explore Our Most Popular <span className='text-black'>Travel Packages</span></h1>
      {/* Cards */}
      <div className='flex space-x-6 overflow-x-auto scrollbar-hide'>
        <Card country = "Egypt" Image = {Egypt} />
        <Card country = "Panama" Image = {Panama} />
        <Card country = "Puerto Rico" Image = {PuertoRico} />
        <Card country = "Bali" Image = {Bali} />
        <Card country = "New York" Image = {NewYork} />
      </div>
    </div>
  )
}

export default SelfGuidedTours
