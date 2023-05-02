import Head from "next/head";
import Tiltcard from "@/components/portfolio/Tiltcard";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { SwiperComponent } from "@/components/portfolio/Swiper";

export default function Works() {
  return (
    <>
      <Head>
        <title>Abid Hasan | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={2}>
      <div className="lg:max-w-7xl h-screen lg:mx-auto mt-16 px-3">
        {/* ============Webapps=========== */}
        <ParallaxLayer speed={0.7} factor={0.5}  style={{ backgroundColor: '#0f172a' }} className="z-10">
        <div className="lg:h-fit lg:max-w-7xl lg:mx-auto mx-3 my-20 bg-[#0f172a]">
          <div className="relative h-full text-white/80">
            <h1 className="text-2xl text-center font-bold my-10">
              Some of my Web Applications.
            </h1>
            <div className="absolute z-0 lg:w-32 lg:h-32 w-36 h-36 animate-spin-slow top-1/4 lg:left-28 left-0 bg-opacity-20 bg-gradient-to-r from-blue-900 to-purple-700 rounded-full"/>
            <div className="absolute z-0 lg:w-60 lg:h-60 w-44 h-44 animate-spin-slow bottom-0 right-1/2 bg-opacity-20 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full"/>
            <div className="absolute z-0 lg:w-40 lg:h-40 w-36 h-36 animate-spin-slow top-1/3 lg:right-20 right-0 bg-opacity-20 bg-gradient-to-r from-emerald-700 to-cyan-500 rounded-full"/>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3">
              <Tiltcard/>
              <Tiltcard/>
            </div>
          </div>
        </div>
        </ParallaxLayer>
        {/* ============Extra text=========== */}
        <ParallaxLayer offset={0.7} speed={-0.5} factor={0.5} className="z-0">
        <div className="lg:max-w-7xl lg:mx-auto mx-3">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="lg:text-4xl text-2xl font-extralight">&quot;Good <span className="lg:text-7xl text-4xl">design</span>  is obvious.
                <br />Great design is <span className="lg:text-7xl text-4xl">transparent.</span>&quot;</h1>
              <p className="text-right mt-4">- Joe Sparano</p>
              <ParallaxLayer speed={1}>
              <div className="absolute top-1/2 inset-x-1/2 z-0 lg:w-40 lg:h-40 w-36 h-36 animate-spin-slow bg-opacity-20 bg-gradient-to-r from-emerald-700 to-cyan-500 rounded-full"></div>
              </ParallaxLayer>
            </div>
          </div>
        </div>
        </ParallaxLayer>
        {/* ============Website=========== */}
        <ParallaxLayer offset={1} factor={1.5} speed={1.5} style={{ backgroundColor: '#0f172a' }}>
        <div className="lg:max-w-7xl lg:mx-auto mx-3 my-20">
          <h1 className="text-2xl text-center font-bold my-10">
            Showcasing My Front-End Craftsmanship
          </h1>
          <div>
            <SwiperComponent/>
          </div>
        </div>
        </ParallaxLayer>
      </div>
      </Parallax>
    </>
  );
}
