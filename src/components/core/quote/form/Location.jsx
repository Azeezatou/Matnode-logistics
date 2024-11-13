import PropTypes from 'prop-types'
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'

const Location = ({
  setDelivery,
  activeDelivery,
  portNameRef,
  zipCodeRef,
  countryRef,
  pickUpDateRef,
  noPortRef,
  countries,
  calculationBy,
  setCalculationBy,
  measurementUnit,
  setMeasurementUnit,
  unitTypeRef,
  quantityRef,
  weightRef,
  lengthRef,
  widthRef,
  heightRef,
}) => {
  const deliveries = ['Port', 'Address']

  return (
    <div className='flex flex-col gap-[32px]'>
      {/* Country section */}
      <div className='flex flex-col gap-[16px]'>
        <div className='grid grid-cols-2 gap-[24px] w-full'>
          <div className='flex flex-col w-full gap-2'>
            <Input
              placeholder='Port name/code'
              className='w-full'
              inputRef={portNameRef}
            />
            <div className='flex flex-row gap-2 items-center'>
              <input type='checkbox' ref={noPortRef} />
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
            inputRef={pickUpDateRef}
          />
        </div>

        <div>
          <Select
            placeholder='Country'
            options={countries || []}
            className='w-full md:w-[400px]'
            inputRef={countryRef}
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
                onClick={() => setDelivery(service)}
                className={`flex items-center justify-center w-full h-[38px] cursor-pointer ${
                  activeDelivery === service
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
              options={countries || []}
              className='w-full'
              inputRef={countryRef}
            />
            <Input
              placeholder='Port name/code'
              className='w-full'
              inputRef={portNameRef}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
            <Input placeholder='Zip code' inputRef={zipCodeRef} />
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
                    calculationBy === item ? 'border border-[#597AFF]' : ''
                  }`}
                  onClick={() => setCalculationBy(item)}
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
                    measurementUnit === item ? 'border border-[#597AFF]' : ''
                  }`}
                  onClick={() => setMeasurementUnit(item)}
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
              options={[]}
              className='flex-[0.8]'
              inputRef={unitTypeRef}
            />
            <Input
              placeholder='Quantity'
              type='number'
              className='flex-1'
              inputRef={quantityRef}
            />
            <Input
              placeholder='Unit weight'
              className='flex-1'
              inputRef={weightRef}
            />
          </div>

          <div className='grid grid-cols-3 gap-[8px] md:gap-[24px] w-full'>
            <Input
              placeholder='Length'
              className='flex-1'
              inputRef={lengthRef}
            />
            <Input
              placeholder='Width'
              className='flex-[0.9]'
              inputRef={widthRef}
            />
            <Input
              placeholder='Height'
              className='flex-1'
              inputRef={heightRef}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Location.propTypes = {
  setDelivery: PropTypes.func,
  activeDelivery: PropTypes.string,
  portNameRef: PropTypes.object,
  zipCodeRef: PropTypes.object,
  countryRef: PropTypes.object,
  pickUpDateRef: PropTypes.object,
  noPortRef: PropTypes.object,
  countries: PropTypes.array,
  unitTypeRef: PropTypes.object,
  quantityRef: PropTypes.object,
  weightRef: PropTypes.object,
  lengthRef: PropTypes.object,
  widthRef: PropTypes.object,
  heightRef: PropTypes.object,
  calculationBy: PropTypes.string,
  setCalculationBy: PropTypes.func,
  measurementUnit: PropTypes.string,
  setMeasurementUnit: PropTypes.func,
}

export default Location
