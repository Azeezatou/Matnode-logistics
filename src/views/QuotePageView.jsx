import { SupportSection } from '../components/core/home/Support'
import QuoteHero from '../components/core/quote/Hero'
import QuoteForm from '../components/core/quote/QuoteForm'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const QuotePageView = () => {
  return (
    <>
      <Navbar />
      <div className='relative'>
        <QuoteHero />
        <div className='flex justify-center mt-4 md:mt-28'>
          <QuoteForm />
        </div>

        <SupportSection />
      </div>
      <Footer />
    </>
  )
}

export default QuotePageView
