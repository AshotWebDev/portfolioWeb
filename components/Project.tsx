import React from 'react'
import ProjectCard from './Helper/ProjectCard'

const Project = () => {
    return (
        <div className='pt-[80px] pb-[50px] bg-gray-900'>
            <div className='text-center'>
                <p className='heading_mini'>React Works</p>
                <h1 className='heading_primary'>
                    My Best<span className='text-yellow-400'>Projects</span>
                </h1>
            </div>
            <ProjectCard
                image="/images/musei.png"
                title='Armenian Musei'
                tech1='React Js'
                tech2='Redux Js'
            />


            <ProjectCard
                image="/images/webex.png"
                title='Webex.am'
                tech1='React Js'
                tech2='Redux Js'
            />


            <ProjectCard
                image="/images/plusDev.png"
                title='Blog'
                tech1='React Js'
                tech2='Redux Js'
                tech3='TypeScript'
                tech4='Tailwind'
            />

        </div>
    )
}

export default Project