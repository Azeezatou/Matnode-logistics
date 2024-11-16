import About from '../components/core/home/About'
import Hero from '../components/core/home/Hero'
import Services from '../components/core/home/Services'
import Support from '../components/core/home/Support'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const HomePageView = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Support />
      <Footer />
    </>
  )
}

export default HomePageView
