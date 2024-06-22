import { scrollFunck } from '@/utils/scrollFunc'
import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'

interface IPropsNav {
    openNav: () => void
}
const Nav = ({openNav}: IPropsNav) => {
    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setNavSticky(true)
            }
            if(window.scrollY <= 100) {
                setNavSticky(false)
            }
        })
    }, [])

    const stickyStyle = navSticky ? 'bg-[#212428] shadow-gray-900 shadow-sm' : ''

   

    return (
        <div className={`fixed w-[100%] ${stickyStyle} z-[1000] transition-all duration-300`}>
            <div className='flex items-center justify-between h-[80px] w-[80%] mx-auto'>
                <div className='font-logo text-white text-[18px]'>
                    <span className='text-[30px] md:text-[40px] text-yellow-400'>Ashot</span>
                    Poghosyan
                </div>

                <ul className='md:flex hidden items-center space-x-10'>
                    <li className=' cursor-pointer' onClick={() => scrollFunck('home')}>
                        <a className='nav_link '>Home</a>
                    </li>
                    <li className=' cursor-pointer' onClick={() => scrollFunck('about')}>
                        <a className='nav_link'>About</a>
                    </li>
                    <li className=' cursor-pointer' onClick={() => scrollFunck('services')}>
                        <a className='nav_link'>Services</a>
                    </li>
                    <li className=' cursor-pointer' onClick={() => scrollFunck('projects')}>
                        <a className='nav_link'>Projects</a>
                    </li>
                    <li className=' cursor-pointer' onClick={() => scrollFunck('contact')}>
                        <a className='nav_link'>Contact</a>
                    </li>
                </ul>

                <Bars3CenterLeftIcon className='text-white w-[30px] md:hidden h-[30px] rotate-180' onClick={openNav}/>
            </div>
        </div>
    )
}

export default Nav
