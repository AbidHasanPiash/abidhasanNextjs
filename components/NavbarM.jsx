import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RiUser6Fill, RiCodeBoxFill, RiHomeHeartFill } from "react-icons/ri";

export default function NavbarM() {
  const location = useRouter();
  const Menus = [
    { name: "Home", icon: <RiHomeHeartFill />, link: "/" },
    { name: "Portfolio", icon: <RiCodeBoxFill />, link: "/portfolio" },
    { name: "About", icon: <RiUser6Fill />, link: "/about" },
  ];
  //   const Menus = [
  //     { name: "Home", icon: <FiMeh />, dis: "translate-x-0" },
  //     { name: "Profile", icon: <FiMeh />, dis: "translate-x-16" },
  //     { name: "Message", icon: <FiMeh />, dis: "translate-x-32" },
  //     { name: "Photos", icon: <FiMeh />, dis: "translate-x-48" },
  //     { name: "Settings", icon: <FiMeh />, dis: "translate-x-64" },
  //   ];
  const [active, setActive] = useState(location.asPath);
  return (
    <div className="lg:hidden fixed left-0 right-0 bottom-0 bg-slate-900 border border-purple-900 px-6 m-2 rounded-full">
      <ul className="flex items-center justify-between">
        {Menus.map((menu, i) => (
          <li key={i} className="w-screen">
            <Link href={menu.link}>
              <div
                className=" flex items-center justify-center flex-col text-center pt-6"
                onClick={() => setActive(menu.link)}
              >
                <span
                  className={`text-xl cursor-pointer duration-300 ${
                    menu.link === active && "-mt-7 z-10 text-3xl"
                  }`}
                >
                  {menu.icon}
                </span>
                <span
                  className={` ${
                    active === menu.link
                      ? "scale-100 duration-300"
                      : "scale-0"
                  }`}
                >
                  {menu.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
        {/* <span className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
        </span> */}
      </ul>
    </div>
  );
}
