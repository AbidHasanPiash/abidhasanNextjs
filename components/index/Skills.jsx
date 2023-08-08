import React, {useEffect, useRef, useState} from 'react'
import GlowingPyramid from "@/components/common/GlowingPyramid";
import SkillCard from '../common/SkillCard';
import { SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiThreedotjs } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {icon:<SiReact/>,title:'React',expertise:70,project:4},
    {icon:<SiJavascript/>,title:'Javascript',expertise:75,project:6},
    {icon:<SiTailwindcss/>,title:'Tailwindcss',expertise:95,project:9},
    {icon:<SiNodedotjs/>,title:'NodeJS',expertise:45,project:1},
    {icon:<SiMongodb/>,title:'MongoDB',expertise:40,project:1},
    {icon:<SiThreedotjs/>,title:'ThreeJS',expertise:50,project:1},
  ]
  return (
    <div className='pt-16 xl:container m-auto px-3 md:px-12'>
      <h1 className="text-7xl font-extralight text-center">My Expertice.</h1>
      <div className="">
        <div className="group relative lg:col-span-2 flex flex-col items-start justify-center">
          <div className='relative w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-xl'>
            {skills.map((skill, i)=>(
              <SkillCard key={i}
                icon={skill.icon}
                title={skill.title}
                expertise={skill.expertise}
                project={skill.project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}