import Navbar from "./Navbar"
import NavbarM from "./NavbarM"
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const location = useRouter();
  return (
    <>
      {location.asPath != '/backofabid' && <Navbar />}
      <main>
        {children}
      </main>
      {location.asPath != '/backofabid' && <NavbarM/>}
    </>
  )
}