import React, { useEffect } from "react";
import About from "./partials/About";
import Card from "./partials/Card";
import Footer from "./partials/Footer";
import Section from "./partials/Section";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="w-screen p-10 bg-gray-100 dark:bg-slate-800">

      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Section data={data.skills} />
        <Section data={data.interests} title='I like to talk about...' />
        <Footer github={data.social.github} />
      </div>
    </div>
  );
}
export default App;
