import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {BsLinkedin, BsWhatsapp} from "react-icons/bs"
import { SiFacebook, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Player } from "@lottiefiles/react-lottie-player";
import ballAndRingJson from "../public/json/ball-and-ring.json";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Message: ${message}`);
    // code to send form data to backend or email
  };
  const socialLinks = [
    {
      title: "Github",
      icon: <SiGithub />,
      link: "https://github.com/AbidHasanPiash",
    },
    {
      title: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/abidhasanpiash/",
    },
    {
      title: "Gmail",
      icon: <SiGmail />,
      link: "mailto:mp.abidhasan@gmail.com",
    },
    {
      title: "Facebook",
      icon: <SiFacebook />,
      link: "https://www.facebook.com/meghpiash2",
    },
  ];
  return (
    <>
    <Head>
      <title>Abid Hasan | Contact</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="lg:max-w-7xl lg:mx-auto pt-20">
      <h1 className="text-5xl lg:text-7xl font-extralight text-center">Let&#39;s Work Together.</h1>
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Player autoplay loop speed={0.5} src={ballAndRingJson} style={{ height: '400px', width: '400px' }}/>
        </div>
        <div className="mx-auto h-fit sm:w-max">
          <div className="m-auto py-6">
            <div className="rounded-3xl border border-gray-700 bg-gray-800/50 backdrop-blur-md -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl">
                I am open to Talk.
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
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right 
                  focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-800 
                  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
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
                  <div className="w-full relative before:absolute before:bottom-1.5 before:h-0.5 before:left-0 before:origin-right 
                  focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-800 
                  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full rounded-full bg-sky-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600">
                    <span className="text-base font-semibold text-gray-900">
                      Send
                    </span>
                  </button>
                </div>
              </form>
            </div>
            {/* social media */}
            <div className="pt-8 flex flex-col items-center justify-center">
              <h1 className="tracking-widest">Please checkout my social links.</h1>
              <div className="p-3 flex space-x-5">
                {socialLinks.map((social, index) => (
                  <Link href={social.link} target="_blank" key={index}>
                    <div className="group lg:text-3xl text-2xl inline-flex items-center justify-center space-x-2 hover:text-purple-500 cursor-pointer">
                      {social.icon}
                      <span className="scale-0 text-[0px] lg:group-hover:text-2xl group-hover:scale-100 duration-200">
                        {social.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className=" text-gray-500 dark:border-gray-800">
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
    </>
  );
}
