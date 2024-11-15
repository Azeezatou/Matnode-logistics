import RequestCard from './RequestCard'

const DashboardHome = () => {
  return (
    <div className='flex flex-col gap-[32px] pt-[24px] pb-[80px]  px-5 md:px-[142px]'>
      <p className='text-[32px] text-[#1B1603] font-bold font-Oswald'>
        Requests
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[16px]'>
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  )
}

export default DashboardHome
