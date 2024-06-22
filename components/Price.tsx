import React from 'react'
import PriceCard from './Helper/PriceCard'

const Price = () => {
  return (
    <div id="prices" className='pt-[80px] pb-[50px] bg-black'>
        <div className='text-center'>
            <p className='heading_mini'>Popular Services</p>
            <h1 className='heading_primary'>Best <span className='text-yellow-400'>Pricing</span> For Your Project</h1>
        </div>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] items-center pt-[50px] md:pt-[80px]'>
            <PriceCard plane="Basic" price="8$" save="25%" bg="bg-red-900"/>
            <PriceCard plane="Popular" price="12$" save="35%" bg="bg-green-900"/>
            <PriceCard plane="Premium" price="15$" save="45%" bg="bg-blue-900"/>
        </div>
    </div>
  )
}

export default Price