import React from 'react'

export default function Hero() {
  return (
      <section className='h-full pt-6 mb-5'>
      <div className='grid grid-cols-1 h-full sm:grid-cols-2 sm:h-full lg:grid-cols-3 cursor-pointer gap-4 mb-5'>
        <div className='w-full h-96 relative'>
          <div className='h-full w-full'>
            <img className='object-fill w-full h-full' alt='minimal1' src='/image/minimal/minimal1.jpg' />
          </div>
          <div className={'flex absolute top-0 left-0 opacity-0 translate-y-6 h-full w-full text-2xl items-center ease-in duration-300 justify-center font-bold bg-black text-white hover:opacity-80 hover:translate-y-0'}>
            <p>Junior Developer</p>
          </div>
        </div>
        <div className='w-full h-96 relative'>
          <div className='h-full w-full'>
            <img className='w-full h-full' alt='minimal2' src='/image/minimal/minimal2.jpg' />
          </div>
          <div className={'flex absolute top-0 left-0 opacity-0 translate-y-6 h-full w-full text-2xl items-center ease-in duration-300 justify-center font-bold bg-black text-white hover:opacity-80 hover:translate-y-0'}>
            <p>Senior Presales</p>
          </div>
        </div>
        <div className='w-full h-96 relative'>
          <div className='h-full w-full'>
            <img className='w-full h-full' alt='minimal3' src='/image/minimal/minimal3.png' />
          </div>
          <div className={'flex absolute top-0 left-0 opacity-0 translate-y-6 h-full w-full text-2xl items-center ease-in duration-300 justify-center font-bold bg-black text-white hover:opacity-80 hover:translate-y-0'}>
            <p>Pil</p>
          </div>
        </div>
      </div>
      
      <div className='hidden lg:flex items-center h-96 gap-4'>
        <div className='w-3/12 h-full'>
          <div className='h-full w-full'>
            <img className='w-full h-full' alt='minimal4' src='/image/minimal/minimal4.gif' />
          </div>
        </div>
        <div className='w-2/12 h-full'>
          <div className='h-full w-full'>
            <img className='w-full h-full' alt='minimal5' src='/image/minimal/minimal5.jpg' />
          </div>
        </div>
        <div className='w-7/12 h-full'>
          <div className='h-full w-full'>
            <img className='w-full h-full' alt='minimal6' src='/image/minimal/minimal6.gif' />
          </div>
        </div>
      </div>
    </section>
  )
}

