import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';

export default function NavMenu() {
  const navMenuItem = [
    { title: "Home", link: "/" },
    { title: "My Works", link: "/works" },
    { title: "About", link: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - 8;
      const y = e.clientY - 8;
      setCursorPos({ x, y });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPos.x}px`;
      cursorRef.current.style.top = `${cursorPos.y}px`;
    }
  }, [cursorPos]);
  return (
    <div className="relative w-screen group-target:">
        <div className={`bg-[#2e3852] h-screen w-full fixed inset-0 flex items-center justify-end
            duration-1000 ${isOpen?'z-10 translate-x-[0%] delay-200':' z-0 translate-x-[-100%] delay-75'}`}>
            two
        </div>
        <div className={`bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#0f172a] to-indigo-900
            h-screen w-2/6 fixed inset-0 flex items-center justify-center cursor-none
            duration-700 ${isOpen?'z-20 translate-x-[0%]':' z-0 translate-x-[-100%] delay-200'}`}>
            <ul className="flex flex-col space-y-4 font-extrabold cursor-none">
                {navMenuItem.map((item, i)=>(
                <Link key={i} href={item.link} onClick={()=>setIsOpen(false)}>
                <li className="overflow-hidden w-80 p-3 relative group text-5xl hover:tracking-widest duration-200 cursor-none before:cursor-none"
                >
                    {item.title}
                </li>
                </Link>
                ))}
            </ul>
        </div>
        <div className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-md ${isOpen?'cursor-none':'cursor-auto'}`}>
            <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
                <h1 className="text-2xl font-bold">Abid.</h1>
                <div 
                    className={`group w-12 h-12 ${isOpen?'bg-fuchsia-600 delay-300':'bg-sky-600'} rounded-full flex items-center justify-center`} 
                    onClick={() => setIsOpen(!isOpen)} 
                >
                    <button className={`flex flex-col h-6 w-12 justify-center items-center ${isOpen?'cursor-none':'cursor-pointer'}`}>
                        <div className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                            isOpen
                            ? "rotate-45 translate-y-1.5 opacity-100 group-hover:opacity-80"
                            : "opacity-100 group-hover:opacity-80 delay-200"
                        }`}
                        />
                        <div className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                            isOpen
                            ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-80"
                            : "opacity-100 group-hover:opacity-80 delay-200"
                        }`}
                        />
                    </button>
                </div>
            </div>
        </div>
        {isOpen && 
            <div 
                ref={cursorRef} 
                className="fixed z-30 w-12 h-12 left-0 top-0 bg-white rounded-full 
                transition-transform pointer-events-none mix-blend-difference"
            />
        }
    </div>
  );
}
