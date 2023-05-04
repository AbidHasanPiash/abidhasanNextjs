import Image from "next/image";
import { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';

export default function IdCard() {
    useEffect(() => {
      VanillaTilt.init(document.querySelector("#card1"), {
        max: 25,
        speed: 400,
        gyroscope: false,
        glare: true,
        "max-glare": 1,
      });
      VanillaTilt.init(document.querySelector("#card2"), {
        max: 25,
        speed: 400,
        gyroscope: false,
        glare: true,
        "max-glare": 1,
      });
    }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:px-6">
      <div id="card1" className="relative lg:w-[550px] w-[390px] lg:h-80 h-60 shadow-5xl backdrop-filter backdrop-blur-sm border-l border-t border-gray-100/30 bg-white/10 p-6 rounded-xl">
        <div className="text-center">
          <p className="lg:text-lg">Government of the republic of Bangladesh</p>
          <h1 className="lg:text-lg">National ID Card</h1>
        </div>
        <div className="flex items-center justify-between lg:pt-4 pt-2">
          <div>
            <h1 className="text-xs">Name</h1>
            <h1 className="lg:text-xl pb-2">ABID HASAN</h1>
            <h1 className="text-xs">Sex</h1>
            <h1 className="lg:text-xl pb-2">Male</h1>
            <h1 className="text-xs">Date of Birth</h1>
            <h1 className="lg:text-xl">December 25, 1998</h1>
          </div>
          <div>
            <Image
              src={"/image/idcard/chip.png"}
              alt="chip"
              width={60}
              height={40}
              className="opacity-80 w-12 lg:w-16"
            />
          </div>
        </div>
        <h1 className="text-center lg:text-xl lg:pt-8 pt-2 tracking-widest">6902-550-166</h1>
        <Image
          src={"/image/idcard/nationalsybnle.png"}
          alt="nationalsybnle"
          width={200}
          height={200}
          className="w-36 lg:w-48 grayscale opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div id="card2" className="lg:w-[550px] w-[390px] lg:h-80 h-60 shadow-5xl backdrop-filter backdrop-blur-sm border-l border-t border-gray-100/30 bg-white/10 py-6 rounded-xl">
        <div className="lg:h-16 h-10 bg-black text-black pb-3">*</div>
        <div className="px-6">
          <p className="text-xs lg:text-lg">THIS V-CARD IS JUST FOR DESIGN PURPOSES</p>
          <div className="flex items-center justify-between pt-5">
            <p className="lg:text-sm text-xs text-justify pr-10">
              I am a Frontend Developer. I create creative things with the magic
              of Tailwind CSS and React JS.
            </p>
            <Image
              src={"/image/idcard/Abid_Hasan_QR.svg"}
              alt="chip"
              width={90}
              height={40}
              className="opacity-80 rounded-md w-14 lg:w-20"
            />
          </div>
          <p className="lg:text-sm text-xs pt-2">(Please scan the QR code for more details)</p>
        </div>
      </div>
    </div>
  );
}
