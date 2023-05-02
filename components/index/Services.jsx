import React from "react";
import {BiPaintRoll, BiCodeAlt, BiGitBranch} from 'react-icons/bi';

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-3 space-y-10 ">
      <h1 className="text-7xl font-extralight lg:text-center">
        As a Frontend Developer.
      </h1>
      {/* services container */}
      <div className="grid lg:grid-cols-3 gap-5 mx-auto text-gray-900">
        {/* services 1..................................... */}
        <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-200 via-purple-900 to-indigo-200 rounded-xl p-5 relative">
          <h1 className="text-2xl font-bold">UI/UX Design:</h1>
          <BiPaintRoll className="absolute right-2 bottom-2 text-9xl text-[#6a5591]/70" />
          <p className="text-lg text-justify pt-5">
            Creating the visual and interactive elements that users see and
            interact with on websites and applications.
          </p>
        </div>
        {/* services 2..................................... */}
        <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 rounded-xl p-5 relative">
          <h1 className="text-2xl font-bold">Develop Web App:</h1>
          <BiCodeAlt className="absolute right-2 bottom-2 text-9xl text-[#cc6f3d]/70" />
          <p className="text-lg text-justify pt-5">
            Using <span className="font-bold">React</span> to bring the design
            to life, ensuring it is responsive and collaborating with backend
            developers to integrate the frontend with the backend functionality.
          </p>
        </div>
        {/* services 3..................................... */}
        <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 rounded-xl p-5 relative">
          <h1 className="text-2xl font-bold">Update Existing:</h1>
          <BiGitBranch className="absolute right-2 bottom-2 text-9xl text-[#556791]/70" />
          <p className="text-lg text-justify pt-5">
            Modefy or Redesign your existing project for your requirments. I
            will be happy to contribute with you.
          </p>
        </div>
      </div>
    </div>
  );
}
