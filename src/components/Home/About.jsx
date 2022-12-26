import React from 'react'
import { AiFillCheckCircle, AiOutlineCheck } from 'react-icons/ai'

export default function About() {
  return (
    <section className='flex flex-col items-center text-center mt-20 mb-20 w-full'>
      <p className='text-green-600 font-bold text-4xl mb-7'>Experience</p>
      {/* No.1  */}
      <div className='flex flex-col w-8/12 border-2 p-4 rounded-xl mb-3'>
        <div className='flex items-center justify-between w-full border-b-2 mb-2 pb-2'>
          <img className='w-[120px] h-[100px] mr-2' alt='company1' src='/image/about/company2.jpg'/>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <AiFillCheckCircle className='text-blue-500 mr-2'/>
              <p className='font-bold'>Presales</p>
            </div>
            <div className='flex items-center'>
              <AiFillCheckCircle className='text-blue-500 mr-2'/>
              <p className='font-bold'>Software engineer</p>
            </div>
          </div>
          <div className='hidden md:flex flex-col'>
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600'/>
              <p className='text-md font-bold'>Game security company</p>
            </div>
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>Worked for 1 years</p>
            </div> 
          </div>
          <div className='hidden md:flex flex-col'>
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>Game Penetration Test</p>
            </div> 
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>Game client Security</p>
            </div> 
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>API Security (WAAP)</p>
            </div> 
          </div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <AiOutlineCheck className='mr-2 text-xl text-green-600'/>
            <p className='text-green-600 font-bold'>Vendors</p>
          </div>
          <img className='w-[80px] h-[60px] md:w-[120px] md:h-[120px] mr-1' alt='comapny3' src='/image/about/company6.jpg' />
          <img className='w-[80px] h-[60px] md:w-[120px] md:h-[120px] mr-1' alt='comapny4' src='/image/about/company7.png' />
          <img className='w-[80px] h-[60px] md:w-[120px] md:h-[120px] bg-gray-600' alt='comapny5' src='/image/about/company8.svg' />
        </div>
      </div>
      {/* No.2  */}
      <div className='flex flex-col w-8/12 border-2 p-4 rounded-xl'>
        <div className='flex items-center justify-between w-full border-b-2 mb-2 pb-2'>
          <img className='w-[120px] mr-2' alt='company1' src='/image/about/company1.gif'/>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <AiFillCheckCircle className='text-blue-500 mr-2'/>
              <p className='font-bold'>Presales</p>
            </div>
            <div className='flex items-center'>
              <AiFillCheckCircle className='text-blue-500 mr-2'/>
              <p className='font-bold'>Support engineer</p>
            </div>
          </div>
          <div className='hidden md:flex flex-col'>
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600'/>
              <p className='text-md font-bold'>IT security company</p>
            </div>
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>Worked for 9 years</p>
            </div> 
          </div>
          <div className='hidden md:flex flex-col'>
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>Application Security</p>
            </div> 
            <div className='flex items-center'>
              <AiOutlineCheck className='mr-2 text-xl text-blue-600' />
              <p className='text-md font-bold'>Game client Security</p>
            </div> 
          </div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <AiOutlineCheck className='mr-2 text-xl text-green-600'/>
            <p className='text-green-600 font-bold'>Vendors</p>
          </div>
          <img className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] mr-1' alt='comapny3' src='/image/about/company3.PNG' />
          <img className='w-[80px] h-[60px] md:w-[120px] md:h-[120px] mr-1' alt='comapny4' src='/image/about/company4.PNG' />
          <img className='w-[80px] h-[80px] md:w-[120px] md:h-[120px]' alt='comapny5' src='/image/about/company5.svg' />
        </div>
      </div>
    </section>
  )
}

