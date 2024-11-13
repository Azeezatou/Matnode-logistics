import PropTypes from 'prop-types'
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'

const CargoDetails = ({
  commodityRef,
  frequencyRef,
  freighterTermRef,
  quantityValidityDateRef,
  targetPriceRef,
}) => {
  return (
    <div className='flex flex-col gap-[24px]'>
      <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
        Cargo details
      </p>

      <div className='flex flex-col gap-[16px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
          <Input
            placeholder='Commodity'
            type={'text'}
            className='w-full'
            inputRef={commodityRef}
          />
          <Select
            placeholder='Frequency of shipment'
            className='w-full'
            options={[]}
            inputRef={frequencyRef}
          />
        </div>

        <div className='grid grid-cols-2 gap-[24px]'>
          <Select
            placeholder='Freighter term'
            className='w-full'
            options={[]}
            message={'(Optional)'}
            inputRef={freighterTermRef}
          />
          <Input
            placeholder='Quantity validity date'
            type={'text'}
            className='w-full'
            message={'(Optional)'}
            inputRef={quantityValidityDateRef}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
          <Input
            placeholder='Target price'
            type={'text'}
            className='w-full'
            message={'(Optional)'}
            inputRef={targetPriceRef}
          />
        </div>
      </div>
    </div>
  )
}

CargoDetails.propTypes = {
  commodityRef: PropTypes.object.isRequired,
  frequencyRef: PropTypes.object.isRequired,
  freighterTermRef: PropTypes.object.isRequired,
  quantityValidityDateRef: PropTypes.object.isRequired,
  targetPriceRef: PropTypes.object.isRequired,
}

export default CargoDetails
