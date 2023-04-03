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
                    menu.link === active && "-mt-7 bg-transparent shadow-2xl shadow-purple-500 text-white"
                  }`}
                >
                  <i className="bg-white">{menu.icon}</i>
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
      </ul>
    </div>
  );
}
