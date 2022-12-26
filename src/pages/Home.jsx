import React  from 'react'
import ArrowUp from '../components/ArrowUp'
import About from '../components/Home/About'
// components
import Hero from '../components/Home/Hero'
import Minimal from '../components/Home/Minimal'
import Skill from '../components/Home/Skill'
import Will from '../components/Home/Will'

function Home() {

  return (
    <div>
        <Hero />
        <Minimal />
        <hr className='mt-10 text-xl' />
        <About />
        <hr className='mt-10 text-xl' />
        <Skill />
        <Will />
        <ArrowUp />

    </div>
  )
}

export default Home