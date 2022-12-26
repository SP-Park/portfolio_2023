import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function Navbar() {

  return (
    <header className='sticky top-0 z-30 shadow-xl bg-white flex justify-between items-center border-b-2 pb-3 pt-1'>
        <nav className='hidden md:flex items-center gap-4'>
          <a href='https://www.linkedin.com/in/seungpil-park-237959170/' target='_blank' rel="noreferrer"><AiOutlineLinkedin className='text-3xl bg-gray-600 text-white rounded-md hover:scale-110 hover:brightness-110'/></a>
          <a href='https://github.com/SP-Park' target='_blank' rel="noreferrer"><AiOutlineGithub className='text-3xl bg-gray-600 text-white rounded-md hover:scale-110 hover:brightness-110'/></a>
        </nav>
        <Link to='/' className='flex items-center shrink-0'>
          <img className='w-10 mr-2' alt='logo' src='/logo/logo.ico'/>
          <p className='text-4xl text-green-700 font-bold'>Pil's Portfolio</p>
        </Link>
        <nav className='flex items-center gap-4'>
          <Link to='/project' className='text-xl font-bold hover:scale-110 hover:text-green-700'>Project</Link>
          <Link to='/contact' className='text-xl font-bold hover:scale-110 hover:text-green-700'>Contact</Link>
        </nav>
    </header>
  )
}

