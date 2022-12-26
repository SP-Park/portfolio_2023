import React from 'react'

export default function Will() {
  return (
    <div className='mt-10 relative'>
      <img className='w-full h-[250px]' alt='will' src='/image/will/space.png'/>
      <div className='absolute top-5 w-full flex flex-col p-5 text-start'>
        <p className='font-bold text-3xl text-blue-600 mb-5'>Thank you for visiting.</p>
        <p className='text-white font-bold text-xl ml-2'>I like challenges.</p>
        <p className='text-white font-bold text-xl ml-2'>I like to grow through learning.</p>
        <p className='text-white font-bold text-xl ml-2'>Find me if you need anything.</p>
      </div>
    </div>
  )
}

