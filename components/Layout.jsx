import Navbar from "./Navbar"
import NavMenu from "./NavMenu";
import NavbarM from "./NavbarM"
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const location = useRouter();
  return (
    <>
      {location.asPath != '/bankofabid' && <NavMenu />}
      <main>
        {children}
      </main>
      {location.asPath != '/bankofabid' && <NavbarM/>}
    </>
  )
}