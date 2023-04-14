import React from 'react'
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'

export default function GlowingPyramid() {
  return (
    <div className="pyramid">
      <div className="pyramidglow"></div>
      <div>
        <span style={{ "--i": 0 }} className='text-5xl flex pb-10 items-end justify-center'><SiReact/></span>
        <span style={{ "--i": 1 }} className='text-5xl flex pb-10 items-end justify-center'><SiNextdotjs/></span>
        <span style={{ "--i": 2 }} className='text-5xl flex pb-10 items-end justify-center'><SiJavascript/></span>
        <span style={{ "--i": 3 }} className='text-5xl flex pb-10 items-end justify-center'><SiTailwindcss/></span>
      </div>
    </div>
  )
}
