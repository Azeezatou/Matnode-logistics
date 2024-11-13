import workersBg from '../../../assets/images/group-trained-workers-using-depot-equipment-working-packaging-department-with-packages-people-using-merchandise-boxes-pack-ship-products-industrial-stock-distribution 1.png'

const QuoteHero = () => {
  return (
    <div
      className='flex flex-col items-center bg-cover bg-center min-h-[713px]'
      style={{ backgroundImage: `url(${workersBg})` }}
    >
      <div className='flex flex-col items-center justify-center gap-4 text-white mt-48'>
        <p className='text-[56px] font-bold'>Request a quote</p>
        <p className='max-w-[603px] text-[18px] text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the standard dummy text ever since the when an printer took.
        </p>
      </div>
    </div>
  )
}

export default QuoteHero
