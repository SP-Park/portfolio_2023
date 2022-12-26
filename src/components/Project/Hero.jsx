import React from 'react'
import { GoDash } from 'react-icons/go'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Hero() {
  return (
    <div className='flex flex-col w-full mt-10'>
        {/* Watchdogs website */}
        <div className='w-full h-hull bg-black rounded-3xl mb-3 relative hover:scale-105 duration-150 ease-in-out'>
            <img className='rounded-3xl opacity-80 h-[300px]' alt='project1' src='image/project/company.PNG'/>
            <div className='absolute top-10 text-start flex flex-col p-3 ml-5 md:ml-10 rounded-xl border-2'>
                <div className='flex items-center mb-2'>
                    <AiFillCheckCircle className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl md:text-3xl border-b-2 font-bold'>IT Company 'WatchDogs' Homepage</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl'>Frontend: React</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl '>UI: MUI</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://www.watchdogs.co.kr/' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Check Web Site</p></a>
                
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://github.com/SP-Park/watchdogs2' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Github: watchdogs2</p></a>
                </div>
            </div>            
        </div>
        {/* Education company */}
        <div className='w-full h-hull bg-black rounded-3xl mb-3 relative hover:scale-105 duration-150 ease-in-out'>
            <img className='rounded-3xl opacity-80 h-[300px]' alt='project1' src='image/project/education.PNG'/>
            <div className='absolute top-10 text-start flex flex-col p-3 ml-5 md:ml-10 rounded-xl border-2'>
                <div className='flex items-center mb-2'>
                    <AiFillCheckCircle className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl md:text-3xl border-b-2 font-bold'>Education Company Homepage</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl'>Frontend: React | Backend(cloud): firebase auth, hosting</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl '>UI: MUI</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://happycloude-react-edu.web.app/' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Check Web Site</p></a>
                
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://github.com/SP-Park/education_site' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Github: education_site</p></a>
                </div>
            </div>            
        </div>
        {/* shop */}
        <div className='w-full h-hull bg-amber-900 rounded-3xl relative hover:scale-105 mb-3 duration-150 ease-in-out'>
            <img className='rounded-3xl opacity-80 h-[300px]' alt='project1' src='image/project/shop.PNG'/>
            <div className='absolute top-10 text-start flex flex-col p-3 ml-5 md:ml-10 rounded-xl border-2 bg-slate-600'>
                <div className='flex items-center mb-2'>
                    <AiFillCheckCircle className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl md:text-3xl border-b-2 font-bold'>Shopping mall</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl'>Frontend: React | Backend(cloud): firebase auth, hosting</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl '>UI: TailwindCSS</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://happycloue-react-project.web.app/' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Check Web Site</p></a>
                
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://github.com/SP-Park/shop_clone' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Github: shop_clone</p></a>
                </div>
            </div>            
        </div>
        {/* Reddit clone */}
        <div className='w-full h-hull bg-blue-800 rounded-3xl relative hover:scale-105 mb-3 duration-150 ease-in-out'>
            <img className='rounded-3xl opacity-80 h-[300px] w-full' alt='project1' src='image/project/reddit.PNG'/>
            <div className='absolute top-10 text-start flex flex-col p-3 ml-5 md:ml-10 rounded-xl border-2 bg-slate-600'>
                <div className='flex items-center mb-2'>
                    <AiFillCheckCircle className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl md:text-3xl border-b-2 font-bold'>Reddit Clone</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl'>Frontend: React | Backend(cloud): firebase auth, firestore, realtimeDB, hosting</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl '>UI: TailwindCSS</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://happycloude-react-slack-43056.web.app/' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Check Web Site</p></a>
                
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://github.com/SP-Park/raddit_firebase_clone' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Github: reddit_clone</p></a>
                </div>
            </div>            
        </div>
        {/* Youtube clone */}
        <div className='w-full h-hull bg-blue-800 rounded-3xl relative hover:scale-105 duration-150 ease-in-out'>
            <img className='rounded-3xl opacity-80 h-[300px] w-full' alt='project1' src='image/project/youtube.PNG'/>
            <div className='absolute top-10 text-start flex flex-col p-3 ml-5 md:ml-10 rounded-xl border-2 bg-slate-600'>
                <div className='flex items-center mb-2'>
                    <AiFillCheckCircle className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl md:text-3xl border-b-2 font-bold'>Youtube Clone</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl'>Frontend: React | Youtube API</p>
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <p className='text-white text-xl '>UI: TailwindCSS</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://happycloude-react.web.app/' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Check Web Site</p></a>
                
                </div>
                <div className='hidden md:flex items-center'>
                    <GoDash className='text-3xl text-blue-600 mr-2' />
                    <a href='https://github.com/SP-Park/youtube_clone' target='_blank' rel='noreferrer'><p className='text-white text-xl hover:text-blue-500'>Github: Youtube_clone</p></a>
                </div>
            </div>            
        </div>
    </div>
  )
}

