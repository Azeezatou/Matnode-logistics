import PropTypes from 'prop-types'

const PickUp = ({ active, setPickUp }) => {
  const services = ['FCA-port', 'DDP', 'DAP', 'EXW']

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-[15px] font-Rubik text-[#3C3C3C] font-bold'>
        Pickup from
      </p>
      <div className='flex flex-col lg:flex-row gap-2'>
        {services.map((service) => (
          <div
            key={service}
            onClick={() => setPickUp(service)}
            className={`flex items-center justify-center w-full h-[38px] cursor-pointer ${
              active === service
                ? 'border-2 border-[#597AFF] text-[#597AFF] font-semibold'
                : 'border border-[#6C757D] text-[#6C757D]'
            }`}
          >
            <p className=' text-[16px] font-Rubik'>{service}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

PickUp.propTypes = {
  setPickUp: PropTypes.func,
  active: PropTypes.string,
}

export default PickUp
