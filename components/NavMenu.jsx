import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import GlowingCube from "./common/GlowingCube";
import { MdOutlineCall } from "react-icons/md";

export default function NavMenu() {
  const navMenuItem = [
    { title: "Home", link: "/" },
    { title: "My Works", link: "/works" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];
  const router = useRouter();
  const [activePage, setActivePage] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - 8;
      const y = e.clientY - 8;
      setCursorPos({ x, y });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPos.x}px`;
      cursorRef.current.style.top = `${cursorPos.y}px`;
    }
  }, [cursorPos]);
  return (
    <div className="relative w-screen">
      <div
        className={`bg-[#282526] hidden h-screen w-full fixed inset-0 lg:flex items-center justify-end
          duration-1000 ${
            isOpen
              ? "z-10 translate-x-[0%] delay-200"
              : " z-0 translate-x-[-110%] delay-75"
          }`}
      >
        <div className="w-2/6 flex flex-col items-center justify-start">
          <div className="text-[#53ff53] text-2xl">
            <h1 className="text-4xl py-4">Abid Hasan</h1>
            <div>
              <p>Find me here</p>
              <ul className="space-y-2 py-2">
                <li>
                  <Link
                    href={"https://www.linkedin.com/in/abidhasanpiash/"}
                    className="group flex items-center justify-start space-x-2"
                  >
                    <div className="group-hover:rotate-45 duration-150">◆</div>
                    <p className="group-hover:line-through">Linkedin</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://github.com/AbidHasanPiash"}
                    className="group flex items-center justify-start space-x-2"
                  >
                    <div className="group-hover:rotate-45 duration-150">◆</div>
                    <p className="group-hover:line-through">Github</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.facebook.com/meghpiash2/"}
                    className="group flex items-center justify-start space-x-2"
                  >
                    <div className="group-hover:rotate-45 duration-150">◆</div>
                    <p className="group-hover:line-through">Facebook</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/6 h-96 flex items-center justify-center">
          <GlowingCube />
        </div>
      </div>
      <div
        className={`bg-[#f56f5e] h-screen lg:w-2/6 w-screen fixed inset-0 flex items-center justify-center cursor-none
          duration-700 ${
            isOpen
              ? "z-20 translate-x-[0%]"
              : " z-0 translate-x-[-110%] delay-200"
          }`}
      >
        <ul className="w-full flex flex-col space-y-4 font-extrabold cursor-none">
          {navMenuItem.map((item, i) => (
            <Link key={i} href={item.link} onClick={() => setIsOpen(false)}>
              <li
                onClick={() => setActivePage(item.link)}
                className={`w-full text-right py-3 pr-8 relative text-5xl hover:tracking-widest duration-200 cursor-none
                  uppercase 
                  ${
                    activePage === item.link
                      ? "text-red-500 font-extrabold"
                      : "font-extralight"
                  }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 z-30  ${
          isOpen
            ? "cursor-none"
            : "delay-200 cursor-auto bg-[#0f172a] bg-opacity-70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold">Abid.</h1>
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`${
                isOpen ? "block scale-100" : "hidden scale-0"
              } transition-transform duration-1000`}
            >
              <Link href={"tel:01789507895"}>
                <p className="text-2xl tracking-widest hover:line-through flex space-x-3 items-center justify-center">
                  <span>
                    <MdOutlineCall />
                  </span>
                  <span>01789507895</span>
                </p>
              </Link>
            </div>
            <div
              className={`group w-12 h-12 ${
                isOpen ? "bg-fuchsia-600 delay-300" : "bg-sky-600"
              } rounded-full flex items-center justify-center`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <button
                className={`flex flex-col h-6 w-12 justify-center items-center ${
                  isOpen ? "cursor-none" : "cursor-pointer"
                }`}
              >
                <div
                  className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                    isOpen
                      ? "rotate-45 translate-y-1.5 opacity-100 group-hover:opacity-80"
                      : "opacity-100 group-hover:opacity-80 delay-200"
                  }`}
                />
                <div
                  className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                    isOpen
                      ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-80"
                      : "opacity-100 group-hover:opacity-80 delay-200"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={cursorRef}
          className="fixed z-30 w-12 h-12 left-0 top-0 bg-white rounded-full 
                transition-transform pointer-events-none mix-blend-difference"
        />
      )}
    </div>
  );
}
