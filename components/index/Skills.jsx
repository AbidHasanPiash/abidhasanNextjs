import React, {useEffect, useRef, useState} from 'react'
import GlowingPyramid from "@/components/common/GlowingPyramid";

export default function Skills() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPos({ x, y });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPos.x}px`;
      cursorRef.current.style.top = `${cursorPos.y}px`;
    }
  }, [cursorPos]);
  return (
    <div className='pt-16 xl:container m-auto px-3 md:px-12'>
      <h1 className="text-7xl font-extralight text-center">What I Can.</h1>
      <div className="grid lg:grid-cols-3 py-10 px-3">
        <div className="group relative lg:col-span-2 flex flex-col items-start justify-center">
          <div 
            ref={cursorRef} 
            className='fixed w-20 h-20 rounded-full backdrop-blur-sm bg-red-500/70 shadow-neon shadow-red-500
            hidden group-hover:block left-0 top-0'
          />
          <div className='w-full h-full grid grid-cols-4 gap-4'>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
            <div className='shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl'>one</div>
          </div>
        </div>
        <div className="lg:col-span-1 flex items-center justify-center pb-20">
          <GlowingPyramid/>
        </div>
      </div>
    </div>
  )
}


{/* 
<ul className="pt-5 lg:pl-10 text-lg space-y-4">
  <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Designing user interfaces (UI)</span></li>
  <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Developing responsive and user-friendly websites.</span></li>
  <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Creating cross-browser and device-compatible websites.</span></li>
  <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Optimizing website performance.</span></li>
  <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Debugging and troubleshooting website issues.</span></li>
  <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Providing ongoing website maintenance and support.</span></li>
</ul> 
*/}