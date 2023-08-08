import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { BsArrowRight } from "react-icons/bs";

export default function Design() {
    const data = [
        {number:'12', text:'Best Card Design', lotti:'/json/card.json', color:'border-orange-500', bgcolor:'bg-orange-500', shadow:'shadow-orange-500'},
        {number:'16', text:'Reactive Buttons', lotti:'/json/button.json', color:'border-red-500', bgcolor:'bg-red-500', shadow:'shadow-red-500'},
        {number:'07', text:'Interactive Hero', lotti:'/json/hero.json', color:'border-teal-500', bgcolor:'bg-teal-500', shadow:'shadow-teal-500'},
    ]
  return (
    <div className="pt-16 xl:container m-auto px-3 md:px-12">
      <h1 className="text-7xl font-extralight lg:text-center">
        Modern Web UI.
      </h1>
      <div className="mt-16 border border-gray-700 p-3 lg:p-6 rounded-3xl">
        <p className="mb-6 text-xl font-light w-full max-w-2xl text-center mx-auto">
            Easy to customize UI components, blocks and templates built 
            on top of modern frontend tools to make your ideas stand out.
        </p>
        <ol className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {data.map((d, i)=>(
            <li key={i} className={`group h-72 border-2 rounded-3xl overflow-hidden ${d.color}`}>
                <div className="h-4/6">
                    <Player autoplay loop src={d.lotti} className="h-56 w-56"/>
                </div>
                <div className={`h-2/6 flex items-center overflow-hidden border-t-2 ${d.color}`}>
                    <p className={`text-7xl font-bold h-full w-fit p-2 shadow-neon ${d.bgcolor} ${d.shadow}`}>{d.number}</p>
                    <div className="w-full flex items-center justify-between pr-3">
                        <p className="text-xl px-2">{d.text}</p>
                        <BsArrowRight 
                            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 
                            group-hover:translate-x-0 group-hover:opacity-100"
                        />
                    </div>
                </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
