import React, { Suspense, useEffect, useState } from "react";
import AOS from "aos";
import data from "../data";
import { useTheme } from 'next-themes'
import { NextSeo } from "next-seo";

const About = React.lazy(() => import('../components/About'));
const Card = React.lazy(() => import('../components/Card'));
const Footer = React.lazy(() => import('../components/Footer'));
const Section = React.lazy(() => import('../components/Section'));


function App() {
    const { theme, setTheme } = useTheme()
    const [toogle, setToogle] = useState(false)
    useEffect(() => {
        AOS.init({
            once: true,
        });
        setTheme('light')
    }, []);

    const toogleEffect = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setToogle(!toogle)
    }

    return (
        <>
            <NextSeo
                title="Hi there! Call me Ale."
                description="Alejandro Valencia's website, software developer focused in frontend using React, Nextjs, Tailwind and good practices."
                canonical="https://valenciahq.com/"
            />
            <main className="w-1/4n p-10 bg-gray-100 dark:bg-slate-800">
                <button onClick={toogleEffect} className="text-dark border-2 border-gray-500 p-2 text-sm rounded-md dark:text-white dark:border-cyan-200 mb-2">
                    {`Toggle dark ${toogle ? "off" : "on"}`}
                </button>
                <div data-aos="fade-down" data-aos-duration="800">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Card name={data.name} title={data.title} social={data.social} />
                    </Suspense>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <Suspense fallback={<div>Loading...</div>}>
                        <About title={data.about.title} description={data.about.description} />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Section data={data.skills} />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Section data={data.interests} title='I like to talk about...' />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Footer github={data.social.github} />
                    </Suspense>
                </div>
            </main >
        </>

    );
}
export default App;
