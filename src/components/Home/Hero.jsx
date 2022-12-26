import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Hero() {

  return (
    <section className='h-[600px] md:h-[750px] bg-blue-500 relative'>
      <div className='w-full h-full bg-cover bg-hero opacity-90'/>
      <div className='absolute w-full top-60 ml-10'>
        <div className='flex items-center gap-3 mb-2'>
          <AiFillCheckCircle className='text-blue-600 text-3xl' />
          <p className='text-white text-xl md:text-2xl'>Presales | Software Engineer</p>
        </div>
        <p className='text-green-600 text-6xl md:text-7xl font-bold mb-4'>Pil Park</p>
        <p className='flex items-center text-white text-2xl md:text-4xl'>Welcome to my universe</p>
      </div>
    </section>
  )
}

