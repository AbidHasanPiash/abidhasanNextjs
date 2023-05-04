import { useState, useEffect } from 'react';
import about from "../../public/image/about.png";
import Image from 'next/image';
import BtnTwoSideGlow from '../common/BtnTwoSideGlow';
import { Player } from "@lottiefiles/react-lottie-player";
import scrollDown from "../../public/json/scroll-down.json";

export default function Hero() {
    const [divVisible, setDivVisible] = useState(true);
  
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 0) {
          setDivVisible(false);
        } else {
          setDivVisible(true);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className='lg:h-screen w-full lg:grid lg:grid-cols-2'>
        <div className='relative'>
            <Image src={about} alt="about" height={768} width={560} className=""/>
            <div className='absolute bottom-0 w-full h-1/2 flex flex-col items-start justify-end
                bg-gradient-to-b from-transparent via-[#0f172a] to-[#0f172a]'
            >
                {/* Only for mobile view */}
                <p className='lg:hidden text-7xl font-bold text-[#475e92]'>I&#39;m a</p>
                <p className='lg:hidden text-7xl font-bold text-[#9DD7ED]'>Developer.</p>
                <p className='lg:hidden pl-1.5 py-3 text-justify'>
                    I am a frontend developer. I have a year of experience working with web 
                    technologies, including HTML, CSS, React js, Next js and Tailwind CSS.
                </p>
                <span className='lg:hidden w-full flex items-center justify-center'>
                    <BtnTwoSideGlow text='Download Resume'/>
                </span>
            </div>
        </div>
        {/* Only for desktop view */}
        <div className='hidden lg:flex items-center justify-self-start'>
            <div>
                <p className='text-8xl font-bold text-[#475e92]'>I&#39;m a</p>
                <p className='text-8xl font-bold text-[#9DD7ED]'>Developer.</p>
                <p className='pl-1.5 py-3'>
                    I am a frontend developer. I have a year of experience working with web 
                    technologies, including HTML, CSS, React js, Next js and Tailwind CSS.
                </p>
                <span>
                    <BtnTwoSideGlow text='Download Resume' link='https://drive.google.com/drive/folders/1eCzgAba6AgW-1X75eDmuQ2da7a_0K1rr?usp=sharing'/>
                </span>
            </div>
        </div>
        <div className={`${divVisible && 'lg:block'} hidden absolute bottom-0 left-1/2 transform -translate-x-1/2`}>
          <Player autoplay loop speed={2} src={scrollDown} style={{ height: '80px', width: '80px' }}/>
        </div>
    </div>
  )
}
