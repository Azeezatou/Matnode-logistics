import { Loading, Notify } from 'notiflix'
import { useEffect, useState } from 'react'
import { quotesRequests } from '../../../libs/requests/quotes.request'
import RequestCard from './RequestCard'

const DashboardHome = () => {
  const [quotes, setQuotes] = useState([])

  const fetchAllQoutes = async () => {
    Loading.circle()

    const res = await quotesRequests.getAllQuotes()

    if (!res.success) {
      Loading.remove()
      return Notify.failure(res.message)
    }

    Loading.remove()

    setQuotes(res.data)

    console.log('quotes', res.data)
  }

  useEffect(() => {
    fetchAllQoutes()
  }, [])

  return (
    <div className='flex flex-col gap-[32px] pt-[24px] pb-[80px]  px-5 md:px-[142px]'>
      <p className='text-[32px] text-[#1B1603] font-bold font-Oswald'>
        Requests
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[16px]'>
        {quotes.map((quote) => (
          <RequestCard key={quote._id} quote={quote} />
        ))}
      </div>
    </div>
  )
}

export default DashboardHome
