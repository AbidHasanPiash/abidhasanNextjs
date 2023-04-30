import NavMenu from "./NavMenu";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const location = useRouter();
  return (
    <>
      {location.asPath != '/bankofabid' && <NavMenu />}
      <main className="lg:max-w-7xl h-screen lg:mx-auto mt-16 px-3">
        {children}
      </main>
    </>
  )
}