import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import SwiperCore, { Pagination } from 'swiper/core';
import { EffectCoverflow, Navigation } from 'swiper';

SwiperCore.use([Pagination]);
export const SwiperComponent = () => {
    const swiperElRef = useRef(null);
  
    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('slidechange', (e) => {
        console.log('slide changed');
      });
    }, []);
  return (
    <div className="max-w-5xl mx-auto">
      <Swiper
        ref={swiperElRef}
         effect={'coverflow'}
         slidesPerView={3}
         slidesPerGroup={1}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         loopedSlides= {2}
         looppreventsslide= {"true"}
        //  slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2.5,
         }}
         pagination={{clickable: true,}}
         navigation={{clickable: true,}}
         modules={[EffectCoverflow, Pagination, Navigation]}
        className="md:grid md:grid-cols-2 lg:grid-cols-4"
      >
        <SwiperSlide>
          <div className="bg-purple-500 h-80 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-800">Slide 1</h2>
            <button onClick={()=> console.log("slide 1")}>Click</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-pink-500 h-80 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-800">Slide 2</h2>
            <button onClick={()=> console.log("slide 2")}>Click</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-500 h-80 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-800">Slide 3</h2>
            <button onClick={()=> console.log("slide 3")}>Click</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-500 h-80 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-800">Slide 4</h2>
            <button onClick={()=> console.log("slide 4")}>Click</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-rose-500 h-80 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-800">Slide 5</h2>
            <button onClick={()=> console.log("slide 5")}>Click</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};