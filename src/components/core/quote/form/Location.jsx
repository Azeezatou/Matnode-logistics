import PropTypes from 'prop-types'
import countriesData from '../../../../assets/country.json'
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'

const Location = ({ formData, setFormData, handleChange }) => {
  const deliveries = ['Port', 'Address']

  const countryOptions = countriesData.map((country) => ({
    value: country.name,
    label: country.name,
  }))

  const unitTypes = [
    { value: 'Pallet', label: 'Pallet' },
    { value: 'Box', label: 'Box' },
    { value: 'Carton', label: 'Carton' },
    { value: 'Bag', label: 'Bag' },
    { value: 'Other', label: 'Other' },
  ]

  return (
    <div className='flex flex-col gap-[32px]'>
      {/* Country section */}
      <div className='flex flex-col gap-[16px]'>
        <div className='grid grid-cols-2 gap-[24px] w-full'>
          <div className='flex flex-col w-full gap-2'>
            <Input
              placeholder='Port name/code'
              className='w-full'
              onChange={handleChange}
              name='portName'
              value={formData.portName}
            />
            <div className='flex flex-row gap-2 items-center'>
              <input
                type='checkbox'
                onChange={handleChange}
                name='noPort'
                value={formData.noPort}
              />
              <p className='font-Rubik text-[#6C757D] text-[14px]'>
                I don’t have a port to specify
              </p>
            </div>
          </div>
          <Input
            placeholder='Pick up date'
            type='date'
            className='w-full'
            message='(Optional)'
            onChange={handleChange}
            name='pickDate'
            value={formData.pickDate}
          />
        </div>

        <div>
          <Select
            placeholder='Country'
            options={countryOptions}
            className='w-full md:w-[400px]'
            onChange={handleChange}
            name='country'
            value={formData.country}
          />
        </div>
      </div>

      {/* Delivery,  */}
      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-[15px] font-Rubik text-[#3C3C3C] font-bold'>
            Delivery
          </p>
          <div className='grid grid-cols-2 gap-2'>
            {deliveries.map((service) => (
              <div
                key={service}
                onClick={() => setFormData({ ...formData, delivery: service })}
                className={`flex items-center justify-center w-full h-[38px] cursor-pointer ${
                  formData.delivery === service
                    ? 'border-2 border-[#597AFF] text-[#597AFF] font-semibold'
                    : 'border border-[#6C757D] text-[#6C757D]'
                }`}
              >
                <p className=' text-[16px] font-Rubik'>{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-[16px]'>
          <div className='grid grid-cols-2 gap-[24px] w-full'>
            <Select
              placeholder='Country'
              options={countryOptions}
              className='w-full'
              onChange={handleChange}
              name='country'
              value={formData.country}
            />
            <Input
              placeholder='city'
              className='w-full'
              onChange={handleChange}
              name='city'
              value={formData.city}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
            <Input
              placeholder='Zip code'
              onChange={handleChange}
              name='zipCode'
              value={formData.zipCode}
            />
          </div>
        </div>
      </div>

      {/* Packaging section */}
      <div className='flex flex-col gap-[24px]'>
        <p className='text-[15px] font-Rubik text-[#3C3C3C] font-bold'>
          Packaging
        </p>

        {/* Calculation */}
        <div className='flex flex-row justify-between flex-wrap md:justify-normal gap-1 md:gap-[40px] w-full'>
          <div className='flex flex-col md:flex-row gap-[8px] items-start md:items-center'>
            <p className='text-[#3C3C3C] text-[14px]'>Calculation by: </p>

            <div className='flex items-center gap-[10px] border border-[#6C757DB2] p-[8px] rounded-[8px]'>
              {['Unit', 'Total Shipment'].map((item) => (
                <div
                  key={item}
                  className={`py-[2px] px-[10px] rounded-[8px] text-[#6C757D] cursor-pointer ${
                    formData.calculationBy === item
                      ? 'border border-[#597AFF]'
                      : ''
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, calculationBy: item })
                  }
                >
                  <p className='text-[14px]'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Measurement */}
          <div className='flex flex-col md:flex-row gap-[8px] items-start md:items-center'>
            <p className='text-[#3C3C3C] text-[14px]'>Measurement: </p>

            <div className='flex items-center gap-[10px] border border-[#6C757DB2] p-[8px] rounded-[8px]'>
              {['cm/kg', 'inches/lbs'].map((item) => (
                <div
                  key={item}
                  className={`py-[2px] px-[10px] rounded-[8px] text-[#6C757D] cursor-pointer ${
                    formData.measurementUnit === item
                      ? 'border border-[#597AFF]'
                      : ''
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, measurementUnit: item })
                  }
                >
                  <p className='text-[14px]'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End of calculation */}

        {/* form */}
        <div className='flex flex-col gap-[16px]'>
          <div className='grid grid-cols-3 gap-[8px] md:gap-[24px] w-full'>
            <Select
              placeholder='Unit type'
              options={unitTypes}
              className='flex-[0.8]'
              onChange={handleChange}
              name='unitType'
              value={formData.unitType}
            />
            <Input
              placeholder='Quantity'
              type='number'
              className='flex-1'
              onChange={handleChange}
              name='quantity'
              value={formData.quantity}
            />
            <Input
              placeholder='Unit weight'
              className='flex-1'
              onChange={handleChange}
              name='weight'
              value={formData.weight}
            />
          </div>

          <div className='grid grid-cols-3 gap-[8px] md:gap-[24px] w-full'>
            <Input
              placeholder='Length'
              className='flex-1'
              onChange={handleChange}
              name='length'
              value={formData.length}
            />
            <Input
              placeholder='Width'
              className='flex-[0.9]'
              onChange={handleChange}
              name='width'
              value={formData.width}
            />
            <Input
              placeholder='Height'
              className='flex-1'
              onChange={handleChange}
              name='height'
              value={formData.height}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Location.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleChange: PropTypes.func,
}

export default Location
