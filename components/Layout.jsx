import Navbar from "./Navbar"
import NavbarM from "./NavbarM"

export default function Layout({ children }) {
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