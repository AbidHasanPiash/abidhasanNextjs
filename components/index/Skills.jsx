import React from 'react'
import {ImCheckmark2} from 'react-icons/im';
import GlowingPyramid from "@/components/common/GlowingPyramid";

export default function Skills() {
  return (
    <div className="grid lg:grid-cols-2 py-10 px-3 ">
      <div className="col-span-1 flex flex-col items-start justify-center">
        <h1 className="text-7xl font-extralight ">What I Can.</h1>
        <ul className="pt-5 lg:pl-10 text-lg space-y-4">
          <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Designing user interfaces (UI)</span></li>
          <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Developing responsive and user-friendly websites.</span></li>
          <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Creating cross-browser and device-compatible websites.</span></li>
          <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Optimizing website performance.</span></li>
          <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Debugging and troubleshooting website issues.</span></li>
          <li className="flex items-center justify-start space-x-3" ><span><ImCheckmark2/></span> <span>Providing ongoing website maintenance and support.</span></li>
        </ul>
      </div>
      <div className="col-span-1 flex items-center justify-center pb-10">
        <GlowingPyramid/>
      </div>
    </div>
  )
}
