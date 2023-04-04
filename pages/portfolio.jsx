import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "../components/Slider";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub, FiCheck } from "react-icons/fi";
import VanillaTilt from 'vanilla-tilt';
import React, {useEffect} from 'react';

export default function Portfolio() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#tilt"), {
      max: 25,
      speed: 400,
    });
  }, []);
  const images = [
    { path: "/image/stringlab/stringlab1.png", alt: "stringlab1" },
    { path: "/image/stringlab/stringlab2.png", alt: "stringlab2" },
    { path: "/image/stringlab/stringlab3.png", alt: "stringlab3" },
  ];
  return (
    <>
      <Head>
        <title>Abid Hasan | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="z-0 h-screen">
        {/* ============Webapps=========== */}
        <div className="block lg:h-1/2 lg:max-w-7xl lg:mx-auto mx-3 my-10">
          <div className="relative h-full text-white/80">
            <h1 className="text-2xl text-center font-bold my-10">
              Some of my Web Applications.
            </h1>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* ****** */}
              <div id="tilt" className="flex flex-col items-center justify-center">
                <div className="lg:w-1/2 mx-10 my-5 lg:mx-0 lg:my-0 py-28 shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl">
                  <h1 className="text-8xl absolute top-0 right-0 font-extrabold text-white/20">01</h1>
                  <h1 className="text-sm text-justify pb-5">A web tool that can help you estimate your monthly mortgage payments. 
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
              {/* ****** */}
              <div id="tilt" className="flex flex-col items-center justify-center">
                <div className="lg:w-1/2 mx-10 my-5 lg:mx-0 lg:my-0 py-28 shadow-5xl backdrop-filter backdrop-blur-sm border border-r-0 border-b-0 border-gray-100/30 bg-white/10 p-6 rounded-xl">
                  <h1 className="text-8xl absolute top-0 right-0 font-extrabold text-white/20">02</h1>
                  <h1 className="text-sm text-justify pb-5">A web tool that can help you estimate your monthly mortgage payments. 
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
            </div>
            <div className="absolute z-0 lg:w-40 lg:h-40 w-36 h-36 animate-spin-slow top-1/4 left-10 bg-opacity-20 bg-gradient-to-r from-blue-900 to-purple-700 rounded-full"></div>
            <div className="absolute z-0 lg:w-60 lg:h-60 w-44 h-44 animate-spin-slow bottom-0 right-1/2 bg-opacity-20 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full"></div>
            <div className="absolute z-0 lg:w-40 lg:h-40 w-36 h-36 animate-spin-slow top-1/3 right-20 bg-opacity-20 bg-gradient-to-r from-emerald-700 to-cyan-500 rounded-full"></div>
          </div>
        </div>
        {/* ============Website=========== */}
        <div className="lg:max-w-7xl lg:mx-auto mx-3">
          <h1 className="text-2xl text-center font-bold my-10">
            Showcasing My Front-End Craftsmanship
          </h1>
          {/* Content with slider */}
          <div className="lg:flex w-full h-full">
            <div className="max-w-md lg:mx-0 mx-auto">
              <Slider>
                {images.map((image) => (
                  <Image
                    key={image.path}
                    src={image.path}
                    alt={image.alt}
                    priority 
                    width="600"
                    height="120"
                  />
                ))}
              </Slider>
            </div>
            <div className="z-10 w-full">
              {/* Link and Index  */}
              <div className="w-fit flex space-x-3 bg-slate-900 border-2 border-purple-500 lg:-ml-10 mt-5 lg:mx-0 mx-auto rounded-xl p-3">
                <h1 className="text-4xl border-r-2 border-slate-500 pr-1">1</h1>
                <div>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center space-x-3"
                  >
                    <HiOutlineExternalLink />
                    <span>Live Link</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex items-center justify-center space-x-3"
                  >
                    <FiGithub />
                    <span>Show Code</span>
                  </Link>
                </div>
              </div>
              {/* Details Information */}
              <div className="flex flex-col lg:ml-20 lg:mt-10 mt-5">
                <h1 className="text-2xl">String Lab Solution</h1>
                <p>
                  <span>Category: </span>Frontend
                </p>
                <p>
                  <span>Framwork: </span> React Js{" "}
                </p>
                <div>
                  <h1>Fetears:</h1>
                  <ul className="ml-3">
                    <li className="flex items-center justify-start space-x-2">
                      {" "}
                      <FiCheck /> <span>Ready for Backend</span>
                    </li>
                    <li className="flex items-center justify-start space-x-2">
                      {" "}
                      <FiCheck /> <span>Responsive</span>
                    </li>
                    <li className="flex items-center justify-start space-x-2">
                      {" "}
                      <FiCheck /> <span>All React Functionality</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className="lg:hidden border-b-2 border-white shadow-neon shadow-purple-500 my-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
