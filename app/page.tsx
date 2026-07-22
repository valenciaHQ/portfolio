import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SeoDiff from "@/components/SeoDiff";
import Process from "@/components/Process";
import StackSection from "@/components/StackSection";
import Addons from "@/components/Addons";
import PortfolioRate from "@/components/PortfolioRate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <SeoDiff />
      <Process />
      <StackSection />
      <Addons />
      <PortfolioRate />
      <Contact />
      <Footer />
    </>
  );
}
