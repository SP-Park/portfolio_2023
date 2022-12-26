import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

  return ( 
    <footer className="p-4 bg-white shadow-lg md:px-6 md:py-8 mt-10">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
                <img src="/logo/logo.ico" className="mr-3 h-8" alt="Logo" />
                <span className="self-center text-green-700 font-bold text-2xl whitespace-nowrap">Pil</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-900 sm:mb-0">
                <li>
                    <Link className='mr-2' to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center">© 2023 <a href="#" className="hover:underline">Pil™</a>. All Rights Reserved.
        </span>
    </footer>
  )
}

