import React, { useState } from 'react';
import TypeWriterEffect from './Helper/TypeWriterEffect';
import { ArrowUpLeftIcon } from '@heroicons/react/16/solid';

const Hero = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div id='home' className='w-[100vw] pt-[7vh] md:pt-[12vh] h-[1030px] lg:h-[100vh] custom-bg'>
            <div className='flex flex-col justify-center w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <div>
                        <h1 data-aos='fade-right' className='text-[#c4cfde] mb-4'>WELCOME TO MY WORLD</h1>
                        <div data-aos='fade-left' data-aos-delay='400'>
                            <h1 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-8 text-white'>
                                Hi, I&apos;m <span className='text-yellow-400'>Ashot</span>
                            </h1>
                            <TypeWriterEffect />
                        </div>
                        <div data-aos='fade-up' data-aos-delay='800'>
                            <p className='mt-[30px] text-[13px] md:text-[15px] text-[#c4cfde]'>
                                Motivated and Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. Skilled in creating responsive and user-friendly web interfaces, with a passion for delivering high-quality code and seamless user experiences. Proficient in modern frameworks such as React, with a solid understanding of version control systems like Git.
                            </p>
                            {showText && (
                                <p className='text-[13px] md:text-[15px] text-[#c4cfde]'>
                                    Adept at collaborating with cross-functional teams to implement design specifications and improve website functionality. Continuously learning and staying current with emerging technologies and best practices in web development. Seeking an opportunity to contribute to a dynamic team and grow as a professional in the tech industry.
                                </p>
                            )}
                            {!showText && (
                                <span className='text-[13px] md:text-[15px] text-yellow-400 cursor-pointer' onClick={() => setShowText(true)}>
                                    Read More...
                                </span>
                            )}
                            {showText && (
                                <ArrowUpLeftIcon onClick={() => setShowText(false)} className='w-[20px] text-yellow-400 cursor-pointer' />
                            )}
                        </div>
                        <div className='mt-[30px] flex items-center space-x-6'>
                            <button data-aos='zoom-in' data-aos-delay='1200' className='custom-btn'>
                                <a href='./pdf/Ashot Poghosyan(CV) (1).pdf' className='relative z-10' download>Download CV</a>
                            </button>
                        </div>
                    </div>
                    <div
                        data-aos='fade-left'
                        className='mt-6 xl:w-[600px] xl:h-[600px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full xl:border-[50px] md:border-[30px] border-[20px] border-solid border-[#c4cfde] bg-[url("/images/hero.png")] bg-cover xl:bg-[-6pc] bg-[-3pc]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
