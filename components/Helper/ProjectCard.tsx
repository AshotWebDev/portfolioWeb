import Image from 'next/image'
import React from 'react'
interface Props {
    image: string
    title: string
    tech1?: string
    tech2?: string
    tech3?: string
    tech4?: string
}
const ProjectCard = ({image, title, tech1, tech2, tech3, tech4}: Props) => {
  return (
    <div className='grid w-[80%] mx-auto grid-cols-1 pt-[80px]  lg:grid-cols-2 gap-[30px] items-center'>
        <div className='p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md'>
            <img src={image} alt={title}  className='object-contain rounded-md w-full h-[300px]' />
        </div>
        <div>
            <h1 className='text-white text-[25px]'>{title}</h1>
            <p className='text-white opacity-80 text-[15px] mt-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo provident nulla distinctio reprehenderit sapiente neque dolorum. Rem, vitae, necessitatibus quasi dolorum, inventore soluta libero adipisci quam qui aperiam modi minima?</p>
            <div className='mt-[20px] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[10px]'>
                <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-center'>{tech1}</h1>
                <h1 className='px-6 py-3 bg-yellow-700 text-white rounded-lg text-center'>{tech2}</h1>
                {tech3 && <h1 className='px-6 py-3 bg-blue-400 text-white rounded-lg text-center'>{tech3}</h1>}
                {tech4 && <h1 className='px-6 py-3 bg-white text-black rounded-lg text-center'>{tech4}</h1>}
            </div>

        </div>
    </div>
  )
}

export default ProjectCard