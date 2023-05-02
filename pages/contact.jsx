import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {BsLinkedin, BsWhatsapp} from "react-icons/bs"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Email: ${email}, Message: ${message}`);
    // code to send form data to backend or email
  };
  return (
    <div className="lg:max-w-7xl lg:mx-auto mt-10 px-3">
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-fit sm:w-max">
          <div className="m-auto py-12">
            <div className="space-y-4">
              <h1 className="text-4xl text-center">LET&#39;S TALK</h1>
            </div>
            <div className="mt-12 rounded-3xl border border-gray-700 bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-white">
                Login to your account
              </h3>
              <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                <button className="group w-full h-11 rounded-full border-2 px-6 transition 
                  duration-300 bg-gray-700 border-[#0072b1] hover:bg-[#0072b1]">
                  <Link 
                    href={'https://www.linkedin.com/in/abidhasanpiash/message/'} target="_blank"
                    className="w-max mx-auto flex items-center justify-center space-x-4"
                  >
                    <BsLinkedin size={25} className="duration-300 text-blue-400 group-hover:text-white "/>
                    <span className="block w-max text-sm text-white">
                      With Linkedin
                    </span>
                  </Link>
                </button>
                <button className="group w-full h-11 rounded-full border-2 px-6 transition 
                  duration-300 bg-gray-700 border-green-600 hover:bg-green-600">
                  <Link 
                    href={'https://wa.me/+8801789507895'} target="_blank"
                    className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                    <BsWhatsapp size={25} className="duration-300 text-green-500 group-hover:text-white "/>
                    <span className="block w-max text-sm text-white">
                      With WhatsApp
                    </span>
                  </Link>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-8 dark:text-white">
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
              <div className="space-x-4 text-center">
                <span>&copy; Abid</span>
                <Link
                  href="/"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
