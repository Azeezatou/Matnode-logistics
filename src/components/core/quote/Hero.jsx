import workersBg from '../../../assets/images/group-trained-workers-using-depot-equipment-working-packaging-department-with-packages-people-using-merchandise-boxes-pack-ship-products-industrial-stock-distribution 1.png'

const QuoteHero = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-4 text-white pt-11 md:pt-48'>
        <p className='text-[24px] md:text-[56px] font-bold'>Request a quote</p>
        <p className='max-w-[267px] md:max-w-[603px] text-[14px] md:text-[18px] text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the standard dummy text ever since the when an printer took.
        </p>
      </div>

      <div
        className='absolute -z-10 items-center bg-cover bg-center top-0 left-0 w-full min-h-[217.86px] md:min-h-[713px]'
        style={{ backgroundImage: `url(${workersBg})` }}
      ></div>
    </div>
  )
}

export default QuoteHero
