import { SupportSection } from '../components/core/home/Support'
import QuoteHero from '../components/core/quote/Hero'
import QuoteForm from '../components/core/quote/QuoteForm'

const QuotePageView = () => {
  return (
    <>
      <div>
        <QuoteHero />
        <div className='relative h-[1000px]'>
          <QuoteForm />
        </div>
      </div>
      <SupportSection />
    </>
  )
}

export default QuotePageView
