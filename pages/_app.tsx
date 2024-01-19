import { DefaultSeo } from "next-seo"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

import "flowbite"

import { Footer } from "@/components/features/Footer"
import { Navigation } from "@/components/features/Navigation"
import SEO from "@/next-seo.config"
import "@/styles/globals.css"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default App
