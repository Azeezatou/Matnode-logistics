import Select from '../../../ui/Select'

const AboutShipment = () => {
  return (
    <div className='flex flex-col gap-[24px]'>
      <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
        About the shipment{' '}
      </p>

      <Select className='w-full' placeholder='Search HS code' options={[]} />
    </div>
  )
}

export default AboutShipment
