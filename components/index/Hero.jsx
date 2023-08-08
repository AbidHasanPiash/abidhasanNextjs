import React from "react";
import Image from "next/image";
import Stamp from "@/components/common/Stamp";
import BtnTwoSideGlow from "@/components/common/BtnTwoSideGlow";
import BtnCornerGlow from "@/components/common/BtnCornerGlow";
import profile from "../../public/image/profile.png";
import { Player } from "@lottiefiles/react-lottie-player";
import programmingComputerJson from "../../public/json/programming-computer.json";

export default function Hero() {
  return (
    <div className="h-screen">
      {/* hero - upper section */}
      <div className="lg:h-4/6 grid lg:grid-cols-2 ">
        {/* Text and Button */}
        <div className="h-fit lg:h-full flex flex-col items-start lg:justify-center mx-3 space-y-10">
          <h1 className="lg:text-6xl text-3xl font-extrabold text-center lg:text-start">
            The Web Developer That You Were Looking For,
          </h1>
          <div className="flex w-full items-center justify-center lg:justify-start lg:items-start space-x-6 scale-90 lg:scale-100">
            <BtnTwoSideGlow text="Get Started." link="/contact" />
            <BtnCornerGlow text="Discover." link="/works" />
          </div>
        </div>
        {/* Picture */}
        <div className="w-full h-96 lg:h-full relative group select-none ">
          {/* Card Back part */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6
                w-60 h-72 lg:w-72 lg:h-80 rounded-xl overflow-hidden duration-200
                group-hover:-translate-x-[10%] group-hover:-translate-y-[50%] group-hover:rotate-2"
          >
            <div className="w-full h-full relative p-6 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
              <div className="w-10 h-10 border-t-2 border-l-2 border-white/20 absolute top-4 left-4" />
              <div className="w-10 h-10 border-t-2 border-r-2 border-white/20 absolute top-4 right-4" />
              <div className="w-10 h-10 border-b-2 border-r-2 border-white/20 absolute bottom-4 right-4" />
              <div className="w-10 h-10 border-b-2 border-l-2 border-white/20 absolute bottom-4 left-4" />
              <div className="h-full flex flex-col items-center justify-center">
                <p className="text-2xl">Abid Hasan</p>
                <p className="text-lg">B.Sc.(Engg.) in CSE</p>
              </div>
            </div>
          </div>
          {/* Card Front part */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3 
                w-60 h-72 lg:w-72 lg:h-80 rounded-xl overflow-hidden duration-300
                group-hover:-translate-x-[90%] group-hover:-translate-y-[40%] group-hover:-rotate-6"
          >
            <div className="w-full h-full relative flex items-end bg-gradient-to-r from-violet-200 to-pink-200">
              <div className="lg:w-60 lg:h-60 w-48 h-48 absolute bottom-5 left-6 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full shadow-5xl" />
              <Image src={profile} alt="profile" className="z-10" priority  />
            </div>
          </div>
          {/* Stamp */}
          <div
            className="w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-[150%] -translate-y-[160%] scale-75 lg:scale-100
                rounded-full bg-white/70 backdrop-blur-sm "
          >
            <Stamp text="Creative Developer." />
          </div>
        </div>
      </div>
      {/* hero - down section */}
      <div className="lg:h-2/6 flex flex-col-reverse lg:flex-row items-center justify-between px-3 pb-14">
        <div className="h-40 flex items-center justify-center">
          <Player autoplay loop src={programmingComputerJson} />
        </div>
        <div className="lg:h-40 mt-5 lg:mt-0 flex items-center justify-center">
          <p className="lg:text-xl lg:px-10 pb-20 text-justify">
            Hi, I am creating stunning and intuitive user experiences with the
            latest front-end technologies like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
