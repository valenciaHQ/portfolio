import React, { useEffect, useState } from "react";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Section from "../components/Section";
import AOS from "aos";
import data from "../data";
import { useTheme } from 'next-themes'

function App() {
    const { theme, setTheme } = useTheme()
    const [toogle, setToogle] = useState(false)
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    const toogleEffect = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setToogle(!toogle)
    }

    return (
        <main className="w-screen p-10 bg-gray-100 dark:bg-slate-800">
            <button onClick={toogleEffect} className="text-dark border-2 border-gray-500 p-2 text-sm rounded-md dark:text-white dark:border-cyan-200">
                {`Toggle dark ${toogle ? "on" : "off"}`}
            </button>
            <div data-aos="fade-down" data-aos-duration="800">
                <Card name={data.name} title={data.title} social={data.social} />
            </div>

            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <About title={data.about.title} description={data.about.description} />
                <Section data={data.skills} />
                <Section data={data.interests} title='I like to talk about...' />
                <Footer github={data.social.github} />
            </div>
        </main>
    );
}
export default App;
