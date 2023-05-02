import Head from "next/head";
import Hero from "@/components/index/Hero";
import Services from "@/components/index/Services";
import Skills from "@/components/index/Skills";
import Footer from "@/components/Footer";
import TopProduct from "@/components/index/TopProduct";
export default function Home() {
  return (
    <>
      <Head>
        <title>Abid Hasan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:max-w-7xl h-screen lg:mx-auto mt-20 lg:mt-2 px-3">
        <Hero/>
        <Services/>
        <TopProduct/>
        <Skills/>
        <Footer/>
      </div>
    </>
  );
}
