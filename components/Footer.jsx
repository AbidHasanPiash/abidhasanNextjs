import Link from "next/link";
import { ImPhone } from "react-icons/im";
import { SiGithub, SiLinkedin, SiGmail, SiFacebook } from "react-icons/si";
export default function Footer() {
  const footerLinkItem = [
    { title: "Home", link: "/" },
    { title: "My Works", link: "/works" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];
  const socialLinks = [
    {
      title: "Phone",
      icon: <ImPhone />,
      link: "tel:01789507895",
    },
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
    <footer class="w-full py-6">
      <div class="md:px-12 lg:px-28">
        <div class="container m-auto space-y-6">
          <h1 class="m-auto text-4xl" > Abid.</h1>
          <ul class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8">
            {footerLinkItem.map((item, i)=>(
              <li key={i}>
                <Link href={item.link} class="hover:text-purple-500">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div class="m-auto flex w-max items-center justify-between space-x-4">
            {socialLinks.map((social, index) => (
              <Link href={social.link} target="_blank" key={index}>
                {social.icon}
              </Link>
            ))}
          </div>
          <div class="text-center">
            <span class="text-sm tracking-wide">
              Copyright © tailus <span id="year"></span> | All right reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
