import PropTypes from 'prop-types'
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'

const CargoDetails = ({ formData, handleChange }) => {
  const frequencies = [
    { label: 'One-off shipment', value: 'one-off' },
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ]

  const freigherTerms = [
    { label: 'Prepaid', value: 'prepaid' },
    { label: 'Collect', value: 'collect' },
  ]

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
            value={formData.commodity}
            onChange={handleChange}
            name='commodity'
          />
          <Select
            placeholder='Frequency of shipment'
            className='w-full'
            options={frequencies}
            value={formData.frequency}
            onChange={handleChange}
            name='frequency'
          />
        </div>

        <div className='grid grid-cols-2 gap-[24px]'>
          <Select
            placeholder='Freighter term'
            className='w-full'
            options={freigherTerms}
            message={'(Optional)'}
            value={formData.freighterTerm}
            onChange={handleChange}
            name='freighterTerm'
          />

          <Input
            placeholder='Quantity validity date'
            type='date'
            className='w-full'
            message={'(Optional)'}
            value={formData.quantityValidityDate}
            onChange={handleChange}
            name='quantityValidityDate'
            dateFormat='yyyy/MM/dd'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
          <Input
            placeholder='Target price'
            type={'text'}
            className='w-full'
            message={'(Optional)'}
            onChange={handleChange}
            name='targetPrice'
            value={formData.targetPrice}
          />
        </div>
      </div>
    </div>
  )
}

CargoDetails.propTypes = {
  setFormData: PropTypes.func,
  formData: PropTypes.object,
  handleChange: PropTypes.func,
}

export default CargoDetails
