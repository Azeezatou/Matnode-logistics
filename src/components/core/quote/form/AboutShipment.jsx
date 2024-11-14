import PropTypes from 'prop-types'
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'
import HSCodeInput from './HSCodeInput'

const AboutShipment = ({ formData, handleChange }) => {
  const currencies = [
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' },
  ]
  return (
    <div className='flex flex-col gap-[24px]'>
      <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
        About the shipment{' '}
      </p>

      <HSCodeInput
        className='w-full'
        placeholder='Search HS code'
        onChange={handleChange}
        name='hsCode'
        value={formData.hsCode}
      />

      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col lg:flex-row gap-[24px]'>
          <div className='grid grid-cols-2 gap-[8px] md:gap-[24px] w-full'>
            <Select
              options={[]}
              placeholder='Currency'
              className='w-full'
              onChange={handleChange}
              name='currency'
              value={formData.currency}
            />
            <Input
              placeholder='VAT'
              type={'number'}
              className='w-full'
              onChange={handleChange}
              name='vat'
              value={formData.vat}
            />
          </div>
          <Input
            placeholder='Description'
            type={'number'}
            className='w-full lg:w-[49%]'
            onChange={handleChange}
            name='description'
            value={formData.description}
          />
        </div>

        <div className='grid grid-cols-3 gap-[8px] md:gap-[24px]'>
          <Input
            floatingLabel={'Cost'}
            placeholder='0'
            type={'number'}
            className='w-full'
            onChange={handleChange}
            name='cost'
            value={formData.cost}
          />

          <Input
            floatingLabel={'Freight'}
            placeholder='0'
            type={'number'}
            className='w-full'
            onChange={handleChange}
            name='freight'
            value={formData.freight}
          />

          <Input
            floatingLabel={'Duty'}
            placeholder='0'
            type={'number'}
            className='w-full'
            onChange={handleChange}
            name='duty'
            value={formData.duty}
          />
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[8px] md:gap-[24px]'>
          <Input
            floatingLabel={'Levy'}
            placeholder='0'
            type={'number'}
            className='w-full'
            onChange={handleChange}
            name='levy'
            value={formData.levy}
          />

          <Input
            floatingLabel={'Insurance'}
            placeholder='0'
            type={'number'}
            className='w-full'
            onChange={handleChange}
            name='insurance'
            value={formData.insurance}
          />
        </div>
      </div>
    </div>
  )
}

AboutShipment.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AboutShipment
