import {useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/image/logo.png";

export default function Navbar() {
  const navMenuItem = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "About", link: "/about" },
  ];
  const location = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <nav className="hidden lg:block w-screen h-fit select-none z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
            <div>
                <Image 
                    src={Logo} 
                    alt="logo" 
                    className="w-8 cursor-pointer"
                />
            </div>
            <ul className={`hidden md:flex items-center justify-center text-xl space-x-5`}>
                {navMenuItem.map((item, index) => (
                    <li key={index} className={`px-3 rounded-full ${location.asPath  === item.link ? 'ring-2 ring-purple-500' : 'hover:text-slate-200 hover:scale-105'} duration-200`}>
                        <Link href={item.link} className='flex space-x-2'>
                            <p className={`${location.asPath  === item.link ? 'block' : 'scale-0'}`}> ˂  </p>
                            <p>{item.title}</p>
                            <p className={`${location.asPath  === item.link ? 'block' : 'scale-0'}`}> /˃ </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="md:hidden flex flex-col h-6 w-12 justify-center items-center group" onClick={() => setIsOpen(!isOpen)} >
                <div className={`${hamburgerLine} ${
                    isOpen
                    ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100 scale-[150%]"
                    : "opacity-50 group-hover:opacity-100"
                }`}
                />
                <div className={`${hamburgerLine} ${
                    isOpen
                    ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100 scale-[150%]"
                    : "opacity-50 group-hover:opacity-100"
                }`}
                />
            </button>
            <ul 
                className={`${isOpen 
                    ? 'block fixed top-0 left-0 ease-in-out duration-300' 
                    : 'ease-in-out duration-300 h-screen fixed -left-full'} 
                    md:hidden bg-slate-800 text-xl w-4/6 h-screen border-r border-purple-900 shadow-2xl shadow-purple-800
                    flex flex-col items-center justify-center space-y-10`}
            >
                <div className="flex flex-col items-center justify-center">
                    <Image src={Logo} alt="logo" className="w-20 cursor-pointer" />
                    <h1 className="text-sm">Abid Hasan</h1>
                </div>
                <div>
                    {navMenuItem.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={() => 
                            setIsOpen(!isOpen)} 
                            className={`${location.asPath  === item.link 
                                ? 'ring-2 ring-purple-500' 
                                : 'hover:text-slate-200 hover:scale-105'}
                                lg:text-2xl px-3 rounded-full my-10 mx-8`
                        }>
                            <Link href={item.link} className='flex space-x-2'>
                                <p className={`${location.asPath  === item.link ? 'block' : 'hidden'}`}> ˂  </p>
                                <p>{item.title}</p>
                                <p className={`${location.asPath  === item.link ? 'block' : 'hidden'}`}> /˃ </p>
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
      </div>
    </nav>
  )
}
