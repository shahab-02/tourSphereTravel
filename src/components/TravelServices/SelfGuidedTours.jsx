import React from 'react'
import Card from './Card'
import Egypt from '../../assets/CardImages/Egypt.png'
import Panama from '../../assets/CardImages/Panama.png'
import PuertoRico from '../../assets/CardImages/PuertoRico.png'
import Bali from '../../assets/CardImages/Bali.png'
import NewYork from '../../assets/CardImages/NewYork.png'
import mob3 from '../../assets/mob3.png'

function SelfGuidedTours() {
  return (
    <div className='font-montserrat  p-6  py-16 lg:p-14  text-lg'>
      {/* Section 1 */}
      <div>
      <h1 className='font-bold text-3xl text-[#E9584B] text-center lg:text-left'>Travel <span className='text-black'>Services</span></h1> 
      <h1 className='font-bold text-4xl text-[#E9584B] pt-12'>Tailored-<span className='text-black'>Getaways for Every Traveler</span></h1>
      <p className='pt-4'>Discover vacation packages designed for groups, families, couples, and solo travelers. Whether you seek a relaxing beach retreat, an adventurous mountain escape, or a vibrant city exploration, we have the perfect package for you. Each itinerary is crafted with care to include must-see attractions, local experiences, and seamless travel arrangements.</p>
      <p className='text-md pt-4'>Ready to plan your trip? Browse our packages and let’s make your dream vacation a reality.</p>
      {/* Trips */}
      <h1 className='font-bold text-4xl text-[#E9584B] pt-12'>My<span className='text-black'>   Trips</span></h1>
      {/* Cards */}
      <div className='flex space-x-6 overflow-x-auto scrollbar-hide'>
        <Card country = "Egypt" Image = {Egypt} />
        <Card country = "Panama" Image = {Panama} />
        <Card country = "Puerto Rico" Image = {PuertoRico} />
        <Card country = "Bali" Image = {Bali} />
        <Card country = "New York" Image = {NewYork} />
      </div>
      <h1 className='font-bold text-4xl text-[#E9584B] mt-10'>Explore Our Most Popular <span className='text-black'>Travel Packages</span></h1>
      {/* Cards */}
      <div className='flex space-x-6 overflow-x-auto scrollbar-hide'>
        <Card country = "Egypt" Image = {Egypt} />
        <Card country = "Panama" Image = {Panama} />
        <Card country = "Puerto Rico" Image = {PuertoRico} />
        <Card country = "Bali" Image = {Bali} />
        <Card country = "New York" Image = {NewYork} />
      </div>

      </div>
      {/* Section 2 */}
      <div className='flex mt-10'>
        <div className='flex-1'>
          <img src={mob3} className='lg:h-130 xl:h-150 w-auto mt-20' />
        </div>
        <div className='flex-2 text-justify'>
          <h1 className='font-bold text-4xl text-[#E9584B]'>Location-<span className='text-black'>Based Audio Tours</span></h1>
          <p>In today’s fast-paced world, travelers crave convenience, personalization, and seamless experiences. Tour Sphere Mobile Tour App offers all that and more—right at your fingertips. Whether you’re exploring a bustling city, discovering hidden historical gems, or enjoying scenic outdoor trails, our app transforms every journey into a memorable adventure.</p>
          <div className='space-y-4'>
          <h2 className='font-bold text-xl mt-6'>Why Choose Tour Sphere Mobile Tour App?</h2>
          <ul className='ml-4 list-disc'>
            <li>Convenience On-the-Go: Access maps, itineraries, and guided tours anytime, anywhere.</li>
            <li>Interactive Navigation: Say goodbye to confusion with step-by-step directions </li>
             <li>Immersive Experiences: Enjoy audio guides, fun facts, and stories that bring locations to life.</li>
              <li>Contactless Experience: Explore safely with minimal physical interaction.</li>
          </ul>
          <p>Whether you're a solo traveler, a family on vacation, or a group of friends seeking adventure, the Tour Sphere Mobile Tour App ensures every trip is smooth, informative, and unforgettable.</p>
          <p>Let your phone be your ultimate travel companion—start exploring smarter today!</p>

          </div>
        </div>
        </div>
    </div>
  )
}

export default SelfGuidedTours
