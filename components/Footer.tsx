import { scrollFunck } from '@/utils/scrollFunc'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {

    return (
        <div className='pt-[80px] pb-[50px] bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40 '>
                <div>
                    <div className='font-logo text-white text-[18px]'>
                        <span className='text-yellow-400 text-[30px] md:text-[40px]'>
                            Ashot
                        </span>
                        Poghosyan
                    </div>
                    <h1 className='text-white text-[14px] opacity-70 mt-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quisquam praesentium aliquid quod laborum obcaecati tempore unde labore, autem vel dolorum rerum optio consectetur, sed voluptas iusto. Quis, ducimus at.</h1>
                    <div className='mt-[30px]'>
                        <a href="mailto:ashotpoghosyan380@gmail.com" className='text-yellow-400 text-[16px] opacity-70 underline font-semibold'>ashotpoghosyan380@gmail.com</a>
                    </div>
                </div>

                <div className='md:mx-auto'>
                    <h1 className='text-white text-[17px] font-semibold mb-[15px]'>Quick Links</h1>
                    <p className='text-white opacity-70 text-[15px] mb-[15px] cursor-pointer hover:text-yellow-400' onClick={() => scrollFunck('home')}>HOME</p>
                    <p className='text-white opacity-70 text-[15px] mb-[15px] cursor-pointer hover:text-yellow-400' onClick={() => scrollFunck('about')}>ABOUT</p>
                    <p className='text-white opacity-70 text-[15px] mb-[15px] cursor-pointer hover:text-yellow-400' onClick={() => scrollFunck('services')}>SERVICES</p>
                    <p className='text-white opacity-70 text-[15px] mb-[15px] cursor-pointer hover:text-yellow-400' onClick={() => scrollFunck('projects')}>PROJECTS</p>
                    <p className='text-white opacity-70 text-[15px] mb-[15px] cursor-pointer hover:text-yellow-400' onClick={() => scrollFunck('contact')}>CONTACT</p>
                </div>

                <div className='lg:mx-auto'>
                    <h1 className='text-white font-semibold mb-[15px] text-[17px]'>Address</h1>
                    <div className='flex items-center mt-[10px] space-x-2'>
                        <MapIcon className='w-[20px] h-[20px] text-yellow-300 '/>
                        <p className='text-[17px] font-normal text-white opacity-75'>Yerevan, Armenia</p>
                    </div>

                    <div className='flex items-center mt-[10px] space-x-2'>
                        <EnvelopeIcon className='w-[20px] h-[20px] text-yellow-300 '/>
                        <p className='text-[17px] font-normal text-white opacity-75'>ashotpoghosyan380@gmail.com</p>
                    </div>

                    <div className='flex items-center mt-[10px] space-x-2'>
                        <PhoneIcon className='w-[20px] h-[20px] text-yellow-300 '/>
                        <p className='text-[17px] font-normal text-white opacity-75'>+(374) 98 24 13 84</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer