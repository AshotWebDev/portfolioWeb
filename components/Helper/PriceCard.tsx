import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface IpriceCardProps {
    price: string
    plane: string
    save: string
    bg: string
}
const PriceCard = ({price, plane, save, bg}: IpriceCardProps) => {
  return (
    <div className='tetxt-center rounded-lg bg-gray-900'>
        <div className={`p-6 rounded-t-lg ${bg}`}>
            <h1 className='text-white text-[30px]'>{plane}</h1>
            <p className='text-[16px] text-[#d7d7d7]'>Try out {plane} Plan Save {" "}
            <span className='text-yellow-400'> {save}</span>
            </p>
            <div className='flex justify-center items-end mt-[10px] space-x-1'>
                <h1 className='text-yellow-400 text-[40px] font-bold'>{price}</h1>
                <p className='text-white'>/Hour</p>
            </div>
        </div>
        <div className='p-6'>
            <div className='flex items-center space-x-3 mt-[10px]'>
                <CheckIcon className='w-[20px] h-[20px] text-yellow-400'/>
                <p className='text-white text-[17px] opacity-80'>React Js Website</p>
            </div>

            <div className='flex items-center space-x-3 mt-[10px]'>
                <CheckIcon className='w-[20px] h-[20px] text-yellow-400'/>
                <p className='text-white text-[17px] opacity-80'>Next Js Website</p>
            </div>

            <div className='flex items-center space-x-3 mt-[10px]'>
                <CheckIcon className='w-[20px] h-[20px] text-yellow-400'/>
                <p className='text-white text-[17px] opacity-80'>Java Script Website</p>
            </div>

            <div className='flex items-center space-x-3 mt-[10px]'>
                <CheckIcon className='w-[20px] h-[20px] text-yellow-400'/>
                <p className='text-white text-[17px] opacity-80'>Authentication</p>
            </div>
        </div>
        <button className='mt-[20px] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 transition-all duration-300'>Get Started</button>
    </div>
  )
}

export default PriceCard