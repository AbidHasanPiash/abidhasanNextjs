import Image from "next/image";
import React from "react";
import {FcApproval, FcLink} from "react-icons/fc"
import { ReadMore } from "../common/Readmore";
import Link from "next/link";

export default function TopProduct() {
  const text = "Embrace Resto Man's innovative tools, data-driven insights, and seamless experience to unlock the full potential of your restaurant's success."
  return (
    <div>
      <div className="xl:container m-auto px-3 md:px-12">
        <h1 className="text-7xl font-extralight lg:text-center">Top Ranked Product.</h1>
        <div className="mt-16 text-gray-600 border border-gray-700 p-3 lg:p-16 rounded-3xl space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="group md:5/12 lg:w-1/2">
            <Image
              src="/image/products/restoman.png"
              alt="image"
              loading="lazy"
              width="960"
              height="540"
              className="rounded-3xl group-hover:rounded-xl group-hover:scale-110 duration-150 ring-2 ring-blue-300"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl text-white">
              Resto Man.
            </h2>
            <span className='text-gray-400'>
              {text}
            </span>
            <div className="divide-y space-y-4 divide-gray-800">
              <div className="mt-8 flex gap-4">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-green-500/20">
                  <FcApproval className="w-8 h-8 m-auto"/>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-[#b3ee6f]"> {/*text-[#8bc34a]*/}
                    Features
                  </h4>
                  <ul className="text-gray-400">
                    <li>- Daily Finance Reports</li>
                    <li>- Data Analysis</li>
                    <li>- Advanced Customer Insights</li>
                    <li>- Email Support</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 flex gap-4">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-blue-500/20">
                  <FcLink className="w-8 h-8 m-auto"/>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-[#42a5f5] hover:underline">
                    <Link href={'https://restoman.vercel.app/'} target="_blank">
                      Live Preview
                    </Link>
                  </h4>
                  <p className="text-gray-400">
                    You can test this using test account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
