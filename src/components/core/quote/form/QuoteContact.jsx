import PropTypes from 'prop-types'
import Input from '../../../ui/Input'

const QuoteContact = ({ emailRef, phoneRef }) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
        Where should we send the quote?
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-[8px] md:gap-[24px]'>
        <Input placeholder='Email' inputRef={emailRef} />
        <Input placeholder='Phone' inputRef={phoneRef} />
      </div>
    </div>
  )
}

QuoteContact.propTypes = {
  emailRef: PropTypes.object.isRequired,
  phoneRef: PropTypes.object.isRequired,
}

export default QuoteContact
