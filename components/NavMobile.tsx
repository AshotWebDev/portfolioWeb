import { scrollFunck } from '@/utils/scrollFunc'
import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface IPropseNavMobile{
    showNav: boolean
    hideNavHandler: () => void
}
const NavMobile = ({showNav, hideNavHandler}: IPropseNavMobile) => {
    const navOpenStyle = showNav ? 'translate-x-0' : '-translate-x-full'

   const  mobileMenuItemClick = (type: string) => {
        hideNavHandler()
        scrollFunck(type)
    }

  return (
    <div>
        <div className={`fixed ${navOpenStyle} w-[100vw] h-[100vh] z-[101] bg-gray-800 opacity-70 left-0 top-0 ring-0 bottom-0 transform transition-all duration-300 delay-300  right-0`}>
        </div>
         <ul className={`text-white  ${navOpenStyle} fixed flex justify-center items-center flex-col h-[100%] trasform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
            <li onClick={() => mobileMenuItemClick('home')}>
                <a className='nav_link text-[25px] sm:text-[30px]'>Home</a>
            </li>
            <li onClick={() => mobileMenuItemClick('about')}>
                <a className='nav_link text-[25px] sm:text-[30px]'>About</a>
            </li>
            <li onClick={() => mobileMenuItemClick('services')}>
                <a className='nav_link text-[25px] sm:text-[30px]'>Services</a>
            </li>
            <li onClick={() => mobileMenuItemClick('projects')}>
                <a className='nav_link text-[25px] sm:text-[30px]'>Projects</a>
            </li>
            <li onClick={() => mobileMenuItemClick('contact')}>
                <a className='nav_link text-[25px] sm:text-[30px]'>Contact</a>
            </li>
            <XMarkIcon onClick={() => hideNavHandler()} className='text-white w-[30px] absolute top-[-30px] right-[20px]'/>
        </ul>
    </div>
    
  )
}

export default NavMobile