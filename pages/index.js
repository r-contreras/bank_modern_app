import Hero from "../components/Hero"
import Stats from '../components/Stats'
import Business from "../components/Business"
import Billing from "../components/Billing"
import CardDeal from "../components/CardDeal"
import Testimonials from "../components/Testimonials"
import Clients from "../components/Clients"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <div className="bg-primary flex justify-center items-start">
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start">
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  )
}
