import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
//import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import SwiperCore, { Pagination } from 'swiper/core';
import { EffectCoverflow } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
//import { Navigation } from 'swiper';

SwiperCore.use([Pagination]);
export const SwiperComponent = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 640) {
          setSlidesPerView(1.2);
        } else if (window.innerWidth < 1024) {
          setSlidesPerView(2);
        }else {
          setSlidesPerView(3);
        }
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const website = [
        {
            title:"String Lab", 
            category:"Frontend", 
            tech:"React Js, TailwindCSS, JSON-server",
            img:"/image/stringlab/stringlab1.png",
            livelink:"#",
            codelink:"#"
        },
        {
            title:"Dashboard",
            category:"Frontend", 
            tech:"React Js, TailwindCSS, JSON-server, Firebase",
            img:"/image/stringlab/stringlab1.png",
            livelink:"#",
            codelink:"#"
        },
        {
            title:"Bonik", 
            category:"Frontend", 
            tech:"React Js, TailwindCSS, DaisyUI",
            img:"/image/stringlab/stringlab1.png",
            livelink:"#",
            codelink:"#"
        },
        {
            title:"Bhujon",
            category:"Frontend", 
            tech:"React Js, TailwindCSS, DaisyUI",
            img:"/image/stringlab/stringlab1.png",
            livelink:"#",
            codelink:"#"
        },
        {
            title:"Technofire",
            category:"Fullstuck", 
            tech:"Html, CSS, PHP, MySQL",
            img:"/image/stringlab/stringlab1.png",
            livelink:"#",
            codelink:"#"
        },
    ]
  return (
    <div className="max-w-7xl h-full mx-auto">
      <Swiper
         effect={'coverflow'}
         slidesPerView={slidesPerView}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         loopedSlides= {2}
         looppreventsslide= {"true"}
         coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5,}}
         pagination={{clickable: true,}}
         //navigation={{clickable: true,}}
         modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
          <div className={`h-[500px] bg-lime-400 relative shadow-2xl group overflow-hidden rounded-xl`}>
            <div className='absolute top-0 right-0 h-2/3 w-full rounded-bl-full overflow-hidden'>
                <Image src={'/image/products/restoman.png'} alt='image' width={600} height={900}/>
            </div>
            <div className='absolute bottom-10 left-2 mx-auto w-full text-gray-900'>
                <h2 className="text-4xl font-bold">01. Resto Man</h2>
                <p className="text-sm py-2">Next Js, TailwindCSS</p>
                <div className=''>
                    <p> <Link href={'https://restoman.vercel.app/'} target='_blank'>View Live</Link> </p>
                    <p> <Link href={'https://github.com/AbidHasanPiash/bhojon.git'} target='_blank'>Show Code</Link> </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`h-[500px] bg-amber-400 relative shadow-2xl group overflow-hidden rounded-xl`}>
            <div className='absolute top-0 right-0 h-2/3 w-full rounded-bl-full overflow-hidden'>
                <Image src={'/image/products/creativehi.png'} alt='image' width={600} height={900}/>
            </div>
            <div className='absolute bottom-10 left-2 mx-auto w-full text-gray-900'>
                <h2 className="text-4xl font-bold">02. Creative Hi</h2>
                <p className="text-sm py-2">React Js, TailwindCSS</p>
                <div className=''>
                    <p> <Link href={'https://creativehidemo.vercel.app/'} target='_blank'>View Live</Link> </p>
                    <p> <Link href={'https://github.com/AbidHasanPiash/demo.git'} target='_blank'>Show Code</Link> </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`h-[500px] bg-fuchsia-400 relative shadow-2xl group overflow-hidden rounded-xl`}>
            <div className='absolute top-0 right-0 h-2/3 w-full rounded-bl-full overflow-hidden'>
                <Image src={'/image/products/tipoff.png'} alt='image' width={600} height={900}/>
            </div>
            <div className='absolute bottom-10 left-2 mx-auto w-full text-gray-900'>
                <h2 className="text-4xl font-bold">03. TipOFf</h2>
                <p className="text-sm py-2">Next Js, MongoDB, TailwindCSS</p>
                <div className=''>
                    <p> <Link href={'https://tipoff.vercel.app/'} target='_blank'>View Live</Link> </p>
                    <p> <Link href={'https://github.com/AbidHasanPiash/tipoff.git'} target='_blank'>Show Code</Link> </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`h-[500px] bg-rose-400 relative shadow-2xl group overflow-hidden rounded-xl`}>
            <div className='absolute top-0 right-0 h-2/3 w-full rounded-bl-full overflow-hidden'>
                <Image src={'/image/products/stringlab1.png'} alt='image' width={600} height={900}/>
            </div>
            <div className='absolute bottom-10 left-2 mx-auto w-full text-gray-900'>
                <h2 className="text-4xl font-bold">04. String Lab Solution</h2>
                <p className="text-sm py-2">React Js, TailwindCSS</p>
                <div className=''>
                    <p> <Link href={'https://stringlabsolutions.vercel.app/'} target='_blank'>View Live</Link> </p>
                    <p> <Link href={'#'} target='_blank'>Show Code</Link> </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`h-[500px] bg-cyan-400 relative shadow-2xl group overflow-hidden rounded-xl`}>
            <div className='absolute top-0 right-0 h-2/3 w-full rounded-bl-full overflow-hidden'>
                <Image src={'/image/products/abid.png'} alt='image' width={600} height={900}/>
            </div>
            <div className='absolute bottom-10 left-2 mx-auto w-full text-gray-900'>
                <h2 className="text-4xl font-bold">05. Portfolio</h2>
                <p className="text-sm py-2">Next Js, TailwindCSS</p>
                <div className=''>
                    <p> <Link href={'https://abidhasan.vercel.app/'} target='_blank'>View Live</Link> </p>
                    <p> <Link href={'https://github.com/AbidHasanPiash/abidhasan-portfolio.git'} target='_blank'>Show Code</Link> </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};