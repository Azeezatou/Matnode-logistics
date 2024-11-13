import { SupportSection } from '../components/core/home/Support'
import QuoteHero from '../components/core/quote/Hero'
import QuoteForm from '../components/core/quote/QuoteForm'

const QuotePageView = () => {
  return (
    <div className='relative'>
      <QuoteHero />
      <div className='flex justify-center mt-4 md:mt-28'>
        <QuoteForm />
      </div>

      <SupportSection />
    </div>
  )
}

export default QuotePageView
