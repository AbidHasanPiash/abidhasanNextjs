import Link from 'next/link'
import React from 'react'

export default function BtnTwoSideGlow({text, link }) {
  return (
    <Link href={link}>
    <div className='w-36 h-12 relative group'>
      <div className='w-10 h-3 bg-[#c0f] rounded-md absolute -bottom-px left-1/2 transform -translate-x-1/2 duration-300
        group-hover:bottom-0 group-hover:delay-75 group-hover:rounded-full group-hover:w-9/12 group-hover:h-1/2'/>
      <div className='w-10 h-3 bg-[#c0f] rounded-md absolute -top-px left-1/2 transform -translate-x-1/2 duration-300
        group-hover:top-0 group-hover:delay-75 group-hover:rounded-full group-hover:w-9/12 group-hover:h-1/2'/>
      <button className='w-full h-full overflow-hidden backdrop-filter backdrop-blur-[15px] hover:tracking-widest duration-200 rounded-full border-t border-b border-gray-200/30
        before:block before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r from-transparent to-white/20
        before:skew-x-[45deg] before:translate-x-0 before:duration-300 before:hover:translate-x-[85px]
        hover:text-white'>
        {text}
      </button>
    </div>
    </Link>
  )
}
