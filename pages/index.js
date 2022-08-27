import Hero from "../components/Hero"
import Stats from '../components/Stats'
import Business from "../components/Business"
import App from "../components/App"
import Testimonials from "../components/Testimonials"
import Clients from "../components/Clients"
import Footer from "../components/Footer"
import CTA from "../components/CTA"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hoobank</title>
        <link rel='icon' href='favicon.png' />
      </Head>
      <div className="bg-primary flex justify-center items-start">
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Business />
          <App />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  )
}
