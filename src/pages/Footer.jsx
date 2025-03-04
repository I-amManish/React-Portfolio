import React from 'react'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-8' id='contact'>
        <div className='max-w-[1200px] mx-auto px-4'>
            <div className='flex items-center justify-between flex-col md:flex-row'>
                <div>
                    <h2 className='md:text-7xl text-4xl font-bold mb-10 text-white/50'>Get in <span className='text-gray-400'>touch</span></h2>
                    <a
                        className='md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300'
                        href='mailto:manishkumaryt03@gmail.com'
                    >
                        manishkumaryt03@gmail.com
                    </a>
                </div>
                <div className='text-white/50 mt-12'>
                    <div className='mb-8'>
                        <p className='text-lg mb-1'>Phone</p>
                        <a 
                            href='+91 9012230645'
                            className='text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300'
                        >
                            +91 9012230645
                        </a>
                    </div>
                    <div className='text-lg mb-8'>
                        <p>Pithoragarh</p>
                        <p>Uttarakhand</p>
                    </div>
                </div>
            </div>
            <div className='relative z-10 text-center mt-8 py-12'>
                <h1 className='hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10'>MANISH</h1>
                <h1 className='md:hidden relative text-7xl md:text-[12rem] lg:text-[10rem] font-bold text-white opacity-10'>Manish </h1>
            </div>
            <div className='relative mt-12 container flex sm:justify-between items-center gap-10 max-sm:flex-col'>
                <p className='text-gray-200 caption text-n-4 lg:block'>© {currentYear}. All rights reserved.</p>
                <ul className='flex gap-5 flex-wrap'>
                    <a href='https://github.com/i-amManish' aria-label='GitHub' className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'>
                        <AiFillGithub size={30}/>
                    </a>
                    <a href='https://www.linkedin.com/in/manish-kumar-a22b36263/' aria-label='LinkedIn' className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'>
                        <AiFillLinkedin size={30}/>
                    </a>
                    <a href='https://x.com/i_mmanish03' aria-label='Twitter' className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'>
                        <AiOutlineTwitter size={30}/>
                    </a>
                    <a href='https://www.instagram.com/i_m_manish03?igsh=enBxbmQ5MGhqaDFh' aria-label='Instagram' className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'>
                        <AiFillInstagram size={30}/>
                    </a>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
