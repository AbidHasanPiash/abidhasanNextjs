import Navbar from "./Navbar"
import NavbarM from "./NavbarM"
import { useRouter } from "next/router";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const location = useRouter();
  const location = useRouter();
  return (
    <>
      {location.asPath != '/bankofabid' && <Navbar />}
      <main>
        {children}
      </main>
      {location.asPath != '/bankofabid' && <NavbarM/>}
    </>
  )
}