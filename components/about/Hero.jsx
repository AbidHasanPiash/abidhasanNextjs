import React from 'react'
import about from "../../public/image/about.png";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='lg:h-screen w-full lg:grid lg:grid-cols-2'>
        <div className='relative'>
            <Image src={about} alt="about" height={768} width={560} className=""/>
            <div className='absolute bottom-0 w-full h-1/2 flex flex-col items-start justify-end
                bg-gradient-to-b from-transparent via-[#0f172a] to-[#0f172a]'
            >
                <p className='lg:hidden text-7xl font-bold text-[#475e92]'>I&#39;m a</p>
                <p className='lg:hidden text-7xl font-bold text-[#9DD7ED]'>Developer.</p>
                <p className='lg:hidden pl-1.5 py-3 text-justify'>
                    I am a frontend developer. I have a year of experience working with web 
                    technologies, including HTML, CSS, React js, Next js and Tailwind CSS.
                </p>
            </div>
        </div>
        <div className='hidden lg:flex items-center justify-self-start'>
            <div>
                <p className='text-8xl font-bold text-[#475e92]'>I&#39;m a</p>
                <p className='text-8xl font-bold text-[#9DD7ED]'>Developer.</p>
                <p className='pl-1.5'>
                    I am a frontend developer. I have a year of experience working with web 
                    technologies, including HTML, CSS, React js, Next js and Tailwind CSS.
                </p>
            </div>
        </div>
    </div>
  )
}
