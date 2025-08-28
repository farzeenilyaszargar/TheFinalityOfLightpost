import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavbarComp from "@/components/Navbar";
import LatestNews from "./news/page";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <NavbarComp/>
      <Hero/>
      <LatestNews/>

      <Footer/>

    </div>
  );
}
