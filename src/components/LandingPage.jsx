import React from 'react'
import bgLogo from '../assets/bgLogo.png'
import mob1 from '../assets/mob1.png'
import icons from '../assets/icons.png'
import mob2 from '../assets/mob2.png'
import mob3 from '../assets/mob3.png'
import mobs4 from '../assets/mobs4.png'
import questionLogo from '../assets/questionLogo.png';
import FAQItems from './FAQItems'
import googlePlaystoreLogo from '../assets/googlePlaystoreLogo.svg'
import appleStore from '../assets/appleStore.svg'


function LandingPage() {
  return (
    <div className='font-montserrat'>
    <div className='bg-cover bg-center flex flex-col lg:flex-row items-center' style={{backgroundImage: `url(${bgLogo})` }}>
     <div className='flex-1 text-white p-8 pt-12 sm:p-10 md:p-12 lg:pl-25 lg:pt-20'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold leading-snug lg:leading-normal'>
        Your Personal Travel Guide, Right in Your Pocket!
      </h1>
      <p className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-3xl pt-6 sm:pt-8 md:pt-10 lg:pt-10 xl:pt-12 '>Effortlessly explore exciting destinations, book travel experiences, earn rewards, and embark on unforgettable journeys—all at your fingertips</p>
      <div className='flex space-x-4'>
        <a href='#'>
          <button className='lg:h-12 xl:h-14 mt-15 bg-black rounded-full shadow-2xl px-4 md:px-8 py-2 md:py-4 lg:px-6 lg:py-2'>
          <img src={appleStore} className='h-full w-full  object-cover'/>
          </button>
        </a>
        <a href='#'>
          <button className='lg:h-12 xl:h-14 mt-15 bg-black rounded-full shadow-2xl px-4 md:px-8 py-2 md:py-4 lg:px-6 lg:py-2'>
          <img src={googlePlaystoreLogo} className='h-full w-full  object-cover'/>
          </button>
        </a>
        
      </div>
     </div>
     <div className='flex-1'>
      <img src={mob1} className='max-w-full max-h-full p-6 sm:p-10 md:p-12' />
     </div>
    </div>

    {/* Section 2 */}
    
    <div className='flex flex-col lg:flex-row lg:pl-25 lg:pt-20 items-center p-8 '>
     <div className='flex-1 order-2 lg:order-1 pt-5'>
      <img src={mob2} className='lg:h-130 xl:h-150 w-auto object-contain' />
     </div>
     <div className='pt-15 lg:flex-2 order-1 lg:order-2 lg:pr-15 lg:pl-15 '>
      <h2 className='text-center lg:text-left text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#F97150]'> Explore. <span className='text-black'>Experience. Enjoy.</span></h2>
      <p className='mt-8 text-justify lg:text-md xl:text-2xl'>Welcome to Tour Sphere Travel, where your next great adventure is just a tap away! Whether you’re looking for self-guided mobile tours or customized vacation packages, we make exploring destinations effortless and exciting. Our mobile tour app turns your travels into an immersive journey, offering rich stories, hidden gems, and personalized recommendations at your fingertips.</p>
      <p className='font-bold mt-8 lg:text-md xl:text-2xl'>Start your next adventure today!</p>
     </div>
    </div>

     {/* Section 3 */}

     <div className=' flex flex-col lg:flex-row lg:pl-25 lg:pt-20 p-6 items-center'>
      
     <div className='flex-2'>
       <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F97150] lg:pt-20 '>Can’t find <span className='text-black'>what you are looking for?</span></h2>
       <p className='mt-8 lg:pr-15 text-md md:text-lg lg:text-xl xl:text-2xl'>Let us know what tour you would like and our team will make it available for you</p>
       <a href=""><button className='bg-[#E9584B] text-white font-bold px-5 py-3 rounded-3xl font-poppins mt-10'>
        REQUEST A TOUR
       </button></a>
     </div>

     <div className='flex-1'>
      <img src={mob3} className='pt-8 lg:h-130 xl:h-150 w-auto lg:pr-15' />
     </div>
    
     </div>

     {/* Section 4 */}

     <div className='pt-10 text-center'>
      <h2 className='p-8 text-2xl lg:text-3xl xl:text-4xl text-[#F97150] font-bold'>Create <span className='text-black'>& share your own</span> tours</h2>
      <p className='p-4 text-center lg:mx-45 text-md md:text-lg lg:text-lg xl:text-2xl'>Give yourself an opportunity to make extra income by creating your own tour experience with Tour Sphere.</p>
     </div>

     {/* Section 5 */}

     <ul className='p-6 lg:pl-25 lg:pt-10 leading-6 lg:leading-9 list-disc  lg:text-lg xl:text-xl'>
      <li>Login to Tour Sphere App and create profile</li>
      <li>Click Create Tour</li>
      <li>Follow steps to add video, pictures and audio.</li>
      <li>We will help you with narration using AI and variety of languages</li>
      <li>Add pricing and at the end submit your tour</li>
      <li>We will review and contact you</li>
      <li>Get paid each time your tour is downloaded.</li>
     </ul>

     {/* Section 6 */}

     <div className='p-4 lg:p-12 flex justify-center'>
      <img src={mobs4} className='lg:h-130 xl:h-150' />
     </div>

     {/* Section 7 */}
     <div className='pt-10 text-center'>
      <h2 className='text-2xl lg:text-3xl xl:text-4xl text-black font-bold pb-20'>Frequently asked <span className='text-[#F97150]'>Questions</span></h2>
   
      <FAQItems question="How does it work without cell signal?" 
      answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro dicta dolores voluptatem velit debitis, necessitatibus voluptate vero enim tenetur quo assumenda, eius nobis, quos ullam similique laborum fuga inventore!"  />
      <FAQItems question="How do I buy tours?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="What languages do you offer?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="Can I gift a tour?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="Is there a time or date limit?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="How much does it cost?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="What devices will it work on?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="Do I have to follow a set itinerary?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="How to use coupon codes from websites like Getyourguide, Viator and Klook?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="How long does it take to receive a customized trip proposal?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
       <FAQItems question="Can I make changes to the customized itinerary suggested by Tour Sphere Travel?"
       answer= "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>

       </div>

       {/* Section 8 Desktop*/}
  <div className="hidden lg:flex lg:flex-row overflow-hidden justify-between items-center mt-20 w-full h-full bg-gradient-to-r from-[#FA6F5B] to-[#E51A1D]">
       {/* Left div */}
  <div className="flex p-14">
    <div><img src={questionLogo} className="h-16 w-auto" /></div>
    <div>
    <h1 className="text-white text-2xl pl-4 font-bold">Have a question?</h1>
    <h3 className="text-white text-lg pl-4">Shoot us a message!</h3>
    </div>
  </div>
     {/* Right div */}
  <div className="relative flex items-center justify-center">
    <div className="h-110 w-110 border-6 opacity-90 border-white rounded-full absolute right-[-20%] top-[-200%]"></div>
    <div className="h-80 w-80 border-6 opacity-70 border-white rounded-full absolute right-[-60%] top-[-200%]"></div>
    <div className='pr-20'>
    <button className=" relative bg-[#E9584B] font-bold text-white px-6 py-4 rounded-full shadow-lg ">CONTACT US</button>
    </div> 
  </div>
</div>

{/* Section 8 Mobile and Tab */}
<div className=" lg:hidden flex flex-row overflow-hidden justify-between items-center mt-20 pt-4 pb-6 w-full h-full bg-gradient-to-r from-[#FA6F5B] to-[#E51A1D]">
       {/* Left div */}
  <div className="flex pl-4 md:pl-12">
    <div><img src={questionLogo} className="h-12 w-auto" /></div>
    <div>
    <h1 className="text-white text-xl pl-2 font-bold">Have a question?</h1>
    <h3 className="text-white text-md pl-4 pb-4">Shoot us a message!</h3>
    <button className=" bg-[#E9584B] font-bold text-white px-6 py-3 rounded-full shadow-lg ">CONTACT US</button>
    </div>  
  </div>
     {/* Right div */}
  <div className="relative flex items-center justify-center">
    <div className="h-48 w-48 border-6 opacity-90 border-white rounded-full absolute top-[-40px] "></div>
    <div className="h-38 w-38 border-6 opacity-70 border-white rounded-full absolute right-[-105px] top-[-80px]  "></div> 
  </div>
</div>

  </div>
  )
}

export default LandingPage
