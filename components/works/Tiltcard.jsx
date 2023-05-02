import Link from 'next/link'
import VanillaTilt from 'vanilla-tilt';
import React, {useEffect, useRef} from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function Tiltcard() {
    const tiltRef = useRef(null);
    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 25,
          speed: 400,
          gyroscope: false,
        });
      }
    }, []);
  return (
    <div ref={tiltRef} className="flex flex-col items-center justify-center">
      <div className="lg:w-1/2 mx-10 my-5 lg:mx-0 lg:my-0 py-28 shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl">
        <h1 className="text-8xl absolute top-0 right-0 font-extrabold text-white/20">01</h1>
        <h1 className="text-lg lg:text-2xl text-justify pb-5">A web tool that can help you estimate your monthly mortgage payments. 
        </h1>
        <Link href={'/bankofabid'}>
          <div className="flex space-x-2 items-center justify-center text-xl border border-purple-500 rounded-full w-fit mx-auto px-3 py-1 
            hover:shadow-neon hover:shadow-purple-500 hover:bg-purple-500 hover: text-white">
            <button>Bank of Abid </button>
            <HiOutlineExternalLink/>
          </div>
        </Link>
      </div>
    </div>
  )
}
