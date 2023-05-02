import Image from "next/image";
import React from "react";
import { ReadMore } from "../common/Readmore";

export default function TopProduct() {
  const text = "Inventory management system built using ReactJS, providing a comprehensive solution for managing a shop's inventory. The app includes features for tracking inventory levels, creating purchase orders, managing suppliers, and generating reports. The intuitive user interface enables shop owners to quickly and easily update inventory levels, view current stock levels, and monitor sales trends. The app is scalable, allowing for easy expansion as the business grows. Built with the latest technologies, this inventory management system provides a robust and reliable solution for any shop looking to streamline their inventory management process."
  return (
    <div>
      <div class="xl:container m-auto px-3 md:px-12">
        <h1 className="text-7xl font-extralight lg:text-center">Top Ranked Product</h1>
        <div class="mt-16 text-gray-600 border border-gray-700 p-3 lg:p-16 rounded-3xl space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div class="group md:5/12 lg:w-1/2">
            <Image
              src="/image/stringlab/creativehi.png"
              alt="image"
              loading="lazy"
              width="960"
              height="540"
              className="rounded-3xl group-hover:rounded-xl group-hover:scale-110 duration-150"
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold md:text-4xl text-white">
              Inventory Managment System
            </h2>
            <span className='text-gray-400'>
              <ReadMore text = {text} limite = {200}/>
            </span>
            
            <div class="divide-y space-y-4 divide-gray-800">
              <div class="mt-8 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 m-auto text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="w-5/6">
                  <h4 class="font-semibold text-lg text-indigo-300">
                    Chat Anytime
                  </h4>
                  <p class="text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
              <div class="pt-4 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 m-auto text-teal-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="w-5/6">
                  <h4 class="font-semibold text-lg text-teal-300">
                    Real Time Location
                  </h4>
                  <p class="text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
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
