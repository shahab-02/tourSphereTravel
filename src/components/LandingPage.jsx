import React from 'react'
import bgLogo from '../assets/bgLogo.png'
import mob1 from '../assets/mob1.png'
import icons from '../assets/icons.png'
import mob2 from '../assets/mob2.png'
import mob3 from '../assets/mob3.png'
import mobs4 from '../assets/mobs4.png'

function LandingPage() {
  return (
    <div className='font-montserrat'>
    <div className='bg-cover bg-center flex flex-col lg:flex-row' style={{backgroundImage: `url(${bgLogo})` }}>
     <div className='lg:flex-1 text-white lg:pl-25 lg:pt-20'>
      <h1 className='lg:text-4xl xl:text-6xl font-bold lg:leading-normal'>
        Your Personal Travel Guide, Right in Your Pocket!
      </h1>
      <p className='lg:text-xl xl:text-3xl lg:pt-10 xl:pt-12 '>Effortlessly explore exciting destinations, book travel experiences, earn rewards, and embark on unforgettable journeys—all at your fingertips</p>
      <img src={icons} className='lg:pt-15 xl:pt-18 h-30 object-cover sm:h-15 lg:h-25 xl:h-32 2xl:h-35' />
     </div>
     <div className='flex-1'>
      <img src={mob1} className='max-w-full max-h-full p-15' />
     </div>
    </div>

    {/* Section 2 */}
    
    <div className=' flex ml-25 mt-30 '>
     <div className='flex-1'>
      <img src={mob2} className='lg:max-h-130 xl:max-h-150 w-auto object-contain' />
     </div>
     <div className='flex-2 mt-25 mr-35 ml-15 '>
      <h2 className='lg:text-3xl xl:text-4xl font-bold text-[#F97150]'> Explore. <span className='text-black'>Experience. Enjoy.</span></h2>
      <p className='mt-8 text-justify lg:text-md xl:text-lg'>Welcome to Tour Sphere Travel, where your next great adventure is just a tap away! Whether you’re looking for self-guided mobile tours or customized vacation packages, we make exploring destinations effortless and exciting. Our mobile tour app turns your travels into an immersive journey, offering rich stories, hidden gems, and personalized recommendations at your fingertips.</p>
      <p className='font-bold mt-8 lg:text-md xl:text-lg'>Start your next adventure today!</p>
     </div>
    </div>

     {/* Section 3 */}

     <div className=' flex ml-25 mt-30'>
      
     <div className='flex-2'>
       <h2 className='text-3xl font-bold text-[#F97150] mt-20 lg:text-3xl xl:text-4xl'>Can’t find <span className='text-black'>what you are looking for?</span></h2>
       <p className='mt-8 text-justify mr-15 lg:text-xl xl:text-2xl'>Let us know what tour you would like and our team will <br /> make it available for you</p>
       <a href=""><button className='bg-[#E9584B] text-white font-bold px-5 py-3 rounded-3xl font-poppins mt-20'>
        REQUEST A TOUR
       </button></a>
     </div>

     <div className='flex-1'>
      <img src={mob3} className='lg:max-h-130 xl:max-h-150 w-auto mr-15 object-contain' />
     </div>
    
     </div>

     {/* Section 4 */}

     <div className='mt-30 text-center'>
      <h2 className='lg:text-3xl xl:text-4xl text-[#F97150] font-bold'>Create <span className='text-black'>& share your own</span> tours</h2>
      <p className='mt-8 lg:text-lg xl:text-xl'>Give yourself an opportunity to make extra income by creating your <br /> own tour experience with Tour Sphere.</p>
     </div>

     {/* Section 5 */}

     <ul className='ml-25 mt-15 leading-9 list-disc list-inside lg:text-lg xl:text-xl'>
      <li>Login to Tour Sphere App and create profile</li>
      <li>Click Create Tour</li>
      <li>Follow steps to add video, pictures and audio.</li>
      <li>We will help you with narration using AI and variety of languages</li>
      <li>Add pricing and at the end submit your tour</li>
      <li>We will review and contact you</li>
      <li>Get paid each time your tour is downloaded.</li>
     </ul>

     {/* Section 6 */}

     <div className='mt-20 flex justify-center'>
      <img src={mobs4} className='lg:max-h-130 xl:max-h-150' />
     </div>



    
    </div>
  )
}

export default LandingPage
