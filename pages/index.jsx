import Head from "next/head";
import Image from "next/image";
import Stamp from "@/components/common/Stamp";
import BtnTwoSideGlow from "@/components/common/BtnTwoSideGlow";
import BtnCornerGlow from "@/components/common/BtnCornerGlow";
import profile from "../public//image/profile.png";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import TextWithColor from "@/components/TextWithColor";
export default function Home() {
  return (
    <>
      <Head>
        <title>Abid Hasan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:max-w-7xl h-screen lg:mx-auto mt-20 px-3">
        <div className="h-3/4 lg:h-1/2 grid grid-cols-1 lg:grid-cols-2 lg:mx-auto">
          {/* Text and Button */}
          <div className="flex flex-col items-start lg:justify-center mx-3 space-y-4">
            <h1 className="lg:text-5xl text-3xl font-extrabold">
              The Web Designer That You Were Waiting For,
            </h1>
            <p className="text-sm lg:text-base text-justify text-white/50">Hi, I am creating stunning and intuitive user experiences with the latest front-end 
              technologies like React, Next.js, and Tailwind CSS.</p>
            <div className="flex space-x-3">
              <BtnTwoSideGlow text="Get Started" />
              <BtnCornerGlow text="Discover." />
            </div>
          </div>
          {/* Picture */}
          <div className="relative group border-gray-700 select-none">
            {/* Card Bacl part */}
            <div
              className="absolute lg:translate-x-[70%] translate-x-[40%] lg:translate-y-[30%] translate-y-[-40%] flex items-center justify-center rotate-12 w-52 h-60 lg:w-72 lg:h-80 duration-200
              bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-xl overflow-hidden
              lg:group-hover:translate-x-[80%] lg:group-hover:translate-y-[20%] group-hover:translate-x-[70%] group-hover:translate-y-[-70%] group-hover:rotate-2"
            >
              <div className="w-full h-full relative p-6">
                <div className="w-10 h-10 border-t-2 border-l-2 border-white/20 absolute top-4 left-4" />
                <div className="w-10 h-10 border-t-2 border-r-2 border-white/20 absolute top-4 right-4" />
                <div className="w-10 h-10 border-b-2 border-r-2 border-white/20 absolute bottom-4 right-4" />
                <div className="w-10 h-10 border-b-2 border-l-2 border-white/20 absolute bottom-4 left-4" />
                <p>Abid Hasan</p>
              </div>
            </div>
            {/* Card Front part */}
            <div
              className="absolute lg:translate-x-[35%] translate-x-[15%] lg:translate-y-[40%]  translate-y-[-30%] -rotate-3 w-52 h-60 lg:w-72 lg:h-80 rounded-xl overflow-hidden duration-300
              lg:group-hover:translate-x-[10%] lg:group-hover:translate-y-[45%] group-hover:translate-x-[7%] group-hover:translate-y-[-35%] group-hover:-rotate-6"
            >
              <div className="w-full h-full relative flex items-end bg-gradient-to-r from-violet-200 to-pink-200">
                <div className="lg:w-60 lg:h-60 w-40 h-40 absolute bottom-5 left-6 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full shadow-5xl" />
                <Image src={profile} alt="profile" className="z-10" />
              </div>
            </div>
            {/* Stamp */}
            <div
              className="w-fit h-fit font-extrabold absolute lg:top-20 lg:left-10 -top-28 scale-75 lg:scale-100 rounded-full border-dotted border-[#c0f] bg-white/70 backdrop-blur-sm shadow-neon
              lg:group-hover:scale-75 group-hover:scale-50 duration-300 delay-200 animate-pulse group-hover:animate-none"
            >
              <Stamp text="Creative Developer." />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 space-x-5 p-10">
          <div className="col-span-1 w-full h-40 flex items-center justify-center bg-rose-900 rounded-xl shadow-5xl shadow-rose-800">
            wev design
          </div>
          <div className="col-span-1 w-full h-40 flex items-center justify-center ring-amber-500 ring-2 rounded-xl">
            wev design
          </div>
          <div className="col-span-2 w-full h-40 flex items-center justify-center">
            <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json" style={{ height: '400px', width: '400px' }}/>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json" style={{ height: '400px', width: '400px' }}/>
          </div>
          <div className="col-span-1">
            <TextWithColor/>
          </div>
        </div>
      </div>
    </>
  );
}
