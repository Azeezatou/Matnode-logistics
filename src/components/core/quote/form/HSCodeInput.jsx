import PropTypes from 'prop-types'
import CaretDownIcon from '../../../icons/CaretDownIcon'

const HSCodeInput = ({ className, message, error, inputRef }) => {
  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <div className='flex flex-col gap-2'>
        {/* <label htmlFor='hs-code'>HS code</label> */}
        <div className='relative'>
          <span className='text-[12px] text-[#6C757D] absolute left-4 top-3 -translate-y-1/2 pointer-events-none'>
            HS code
          </span>
          <input
            type='text'
            id='hs-code'
            placeholder='Search HS code'
            aria-label='HS Code'
            className='w-full pb-2 pt-6 px-[16px] bg-[#E9ECFA] focus:outline-none placeholder:text-[#6C757D] text-[14px]'
            ref={inputRef}
          />
          <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
            <CaretDownIcon />
          </div>
        </div>
      </div>
      {message && (
        <p
          className={`text-[14px] font-Rubik ${
            error ? 'text-red-500' : 'text-[#6C757D]'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  )
}

HSCodeInput.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.bool,
  inputRef: PropTypes.object,
}

export default HSCodeInput
