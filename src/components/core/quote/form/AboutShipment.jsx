import PropTypes from 'prop-types'
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'
import HSCodeInput from './HSCodeInput'

const AboutShipment = ({
  hsCodeRef,
  currencyRef,
  vatRef,
  descriptionRef,
  costRef,
  freightRef,
  dutyRef,
  levyRef,
  insuranceRef,
}) => {
  return (
    <div className='flex flex-col gap-[24px]'>
      <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
        About the shipment{' '}
      </p>

      <HSCodeInput
        className='w-full'
        placeholder='Search HS code'
        inputRef={hsCodeRef}
      />

      <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-col lg:flex-row gap-[24px]'>
          <div className='grid grid-cols-2 gap-[8px] md:gap-[24px] w-full'>
            <Select
              options={[]}
              placeholder='Currency'
              className='w-full'
              inputRef={currencyRef}
            />
            <Input
              placeholder='VAT'
              type={'number'}
              className='w-full'
              inputRef={vatRef}
            />
          </div>
          <Input
            placeholder='Description'
            type={'number'}
            className='w-full lg:w-[49%]'
            inputRef={descriptionRef}
          />
        </div>

        <div className='grid grid-cols-3 gap-[8px] md:gap-[24px]'>
          <Input
            floatingLabel={'Cost'}
            placeholder='0'
            type={'number'}
            className='w-full'
            inputRef={costRef}
          />

          <Input
            floatingLabel={'Freight'}
            placeholder='0'
            type={'number'}
            className='w-full'
            inputRef={freightRef}
          />

          <Input
            floatingLabel={'Duty'}
            placeholder='0'
            type={'number'}
            className='w-full'
            inputRef={dutyRef}
          />
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[8px] md:gap-[24px]'>
          <Input
            floatingLabel={'Levy'}
            placeholder='0'
            type={'number'}
            className='w-full'
            inputRef={levyRef}
          />

          <Input
            floatingLabel={'Insurance'}
            placeholder='0'
            type={'number'}
            className='w-full'
            inputRef={insuranceRef}
          />
        </div>
      </div>
    </div>
  )
}

AboutShipment.propTypes = {
  hsCodeRef: PropTypes.object.isRequired,
  currencyRef: PropTypes.object.isRequired,
  vatRef: PropTypes.object.isRequired,
  descriptionRef: PropTypes.object.isRequired,
  costRef: PropTypes.object.isRequired,
  freightRef: PropTypes.object.isRequired,
  dutyRef: PropTypes.object.isRequired,
  levyRef: PropTypes.object.isRequired,
  insuranceRef: PropTypes.object.isRequired,
}

export default AboutShipment
