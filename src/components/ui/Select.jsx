import PropTypes from 'prop-types'
import CaretDownIcon from '../icons/CaretDownIcon'

const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  className,
  message,
  error,
  inputRef,
  name,
}) => {
  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <div className='flex flex-col gap-2'>
        {label && <label htmlFor={label}>{label}</label>}
        <div className='relative'>
          <select
            id={label}
            value={value || ''}
            name={name}
            onChange={onChange || (() => {})}
            aria-label={label}
            placeholder={placeholder}
            className='w-full py-[9px] px-[16px] bg-[#E9ECFA] focus:outline-none text-[#6C757D] appearance-none pr-10'
            ref={inputRef}
          >
            {placeholder && (
              <option value='' selected disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.bool,
  inputRef: PropTypes.object,
  name: PropTypes.string,
}

export default Select
