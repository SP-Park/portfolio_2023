import React from 'react'

export default function Hero() {
  return (
    <section className='h-96 bg-brown-800 relative'>
        <div className='w-full h-full bg-cover bg-contact opacity-80'/>
        <div className='absolute w-full top-32 text-center drop-shadow-2xl'>
          <p className='text-white text-5xl p-3'>Contact me</p>
        </div>
    </section>
  )
}

