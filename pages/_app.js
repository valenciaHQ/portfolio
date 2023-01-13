import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes'
import '../css/tailwind.css'
import "aos/dist/aos.css";

export default function MyApp({ Component, pageProps }) {
    return <ThemeProvider attribute="class"><Analytics /><Component {...pageProps} /></ThemeProvider>
}