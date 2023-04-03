import Navbar from "./Navbar"
import NavbarM from "./NavbarM"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <NavbarM/>
    </>
  )
}