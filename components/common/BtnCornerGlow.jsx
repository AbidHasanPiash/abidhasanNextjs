import Link from "next/link";
import React from "react";

export default function BtnCornerGlow({ text, link }) {
  return (
    <Link href={link}>
      <div className="w-36 h-12 flex flex-col items-center justify-center">
        <button
          className="h-full w-full relative inline-block
        before:block
        before:absolute
        before:inset-0
        before:bg-gradient-to-tr from-[#0cf] via-[#0f172a] to-[#d400d4]
        before:delay-150
        hover:before:-inset-1
        hover:before:blur-sm
        "
        >
          <span
            className="absolute top-0 left-0 w-full h-full text-lg font-bold bg-[#0f172a] border border-[#03060e] 
        flex items-center justify-center overflow-hidden hover:tracking-widest duration-200 
        before:block before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-gradient-to-r from-transparent to-white/20
        before:skew-x-[45deg] before:translate-x-0 before:duration-300 before:hover:translate-x-[90px]"
          >
            {text}
          </span>
        </button>
      </div>
    </Link>
  );
}
