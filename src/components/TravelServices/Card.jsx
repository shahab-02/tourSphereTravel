import React from 'react'
import TimeCircle from '../../assets/CardImages/TimeCircle.png'

function Card({country, Image}) {
  return (
    <div className='shadow-lg shadow-gray-300  w-70 mt-12 font-montserrat'>
      <div>
        <img src={Image} className='object-cover'   />
        <h1 className='font-semibold p-3'>{country}</h1>
        <p className=' pl-3 text-sm text-[#667085] flex'><img src={TimeCircle} className='h-4 pr-1' />
        7 days / 6 nights</p>
        <div className='flex justify-center'><div className='mt-3 border-1 w-60 rounded-full border-[#00000021]'></div></div>
        <div className='flex p-3'>
         <div className='flex-1'><p className='text-[#667085] text-sm font-medium'>Starting from</p>
          <h1 className='text-xl mt-1 font-semibold text-[#E9584B]'>$1550</h1></div>
        <div className=''>
          <button className='bg-[#E9584B] rounded-2xl text-white py-2 px-4 font-bold text-xs mt-3'>Explore</button>
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default Card
