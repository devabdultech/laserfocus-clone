import '@/styles/globals.css';
import { Inter } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre',
  weight: ['400', '700'],
  preload: true
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${libreBaskerville.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
