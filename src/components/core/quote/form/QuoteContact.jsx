import PropTypes from 'prop-types'
import Input from '../../../ui/Input'

const QuoteContact = ({ formData, handleChange }) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
        Where should we send the quote?
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-[8px] md:gap-[24px]'>
        <Input
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          name='email'
        />
        <Input
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
          name='phone'
        />
      </div>
    </div>
  )
}

QuoteContact.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default QuoteContact
