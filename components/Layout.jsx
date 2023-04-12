import NavMenu from "./NavMenu";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const location = useRouter();
  return (
    <>
      {location.asPath != '/bankofabid' && <NavMenu />}
      <main>
        {children}
      </main>
    </>
  )
}