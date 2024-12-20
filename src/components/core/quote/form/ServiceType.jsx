import PropTypes from 'prop-types'

const ServiceType = ({ formData, setFormData }) => {
  const services = ['HCL', 'FCL', 'Air', 'Road']

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-[15px] font-Rubik text-[#3C3C3C] font-bold'>
        Service type
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
        {services.map((service) => (
          <div
            key={service}
            onClick={() => setFormData({ ...formData, serviceType: service })}
            className={`flex items-center justify-center w-full h-[38px] cursor-pointer ${
              formData.serviceType === service
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

ServiceType.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
}

export default ServiceType
