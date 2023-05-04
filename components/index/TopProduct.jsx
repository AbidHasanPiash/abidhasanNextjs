import Image from "next/image";
import React from "react";
import {FcApproval, FcLink} from "react-icons/fc"
import { ReadMore } from "../common/Readmore";

export default function TopProduct() {
  const text = "Built using ReactJS, providing a comprehensive solution for managing a shop's inventory. The intuitive user interface enables shop owners to quickly and easily update inventory levels, view current stock levels, and monitor sales trends. The app is scalable, allowing for easy expansion as the business grows. Built with the latest technologies, this inventory management system provides a robust and reliable solution for any shop looking to streamline their inventory management process."
  return (
    <div>
      <div className="xl:container m-auto px-3 md:px-12">
        <h1 className="text-7xl font-extralight lg:text-center">Top Ranked Product.</h1>
        <div className="mt-16 text-gray-600 border border-gray-700 p-3 lg:p-16 rounded-3xl space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="group md:5/12 lg:w-1/2">
            <Image
              src="/image/stringlab/creativehi.png"
              alt="image"
              loading="lazy"
              width="960"
              height="540"
              className="rounded-3xl group-hover:rounded-xl group-hover:scale-110 duration-150"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl text-white">
              Inventory Managment System
            </h2>
            <span className='text-gray-400'>
              <ReadMore text = {text} limite = {150}/>
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
                    <li>- Tracking inventory levels</li>
                    <li>- Creating purchase orders</li>
                    <li>- Managing suppliers</li>
                    <li>- Generating reports</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 flex gap-4">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-blue-500/20">
                  <FcLink className="w-8 h-8 m-auto"/>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-[#42a5f5]">
                    Live Preview
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
