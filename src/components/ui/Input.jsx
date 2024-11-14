import PropTypes from 'prop-types'

const Input = ({
  label,
  type,
  placeholder,
  className,
  message,
  error,
  inputRef,
  floatingLabel,
  onChange,
  name,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className='flex flex-col gap-2'>
        {label && <label htmlFor={label}>{label}</label>}
        <div className='relative'>
          {!floatingLabel && (
            <input
              {...props}
              type={type === 'date' ? 'text' : type}
              id={label}
              placeholder={placeholder}
              aria-label={label}
              name={name}
              className='w-full py-[9px] px-[16px] bg-[#E9ECFA] focus:outline-none placeholder:text-[#6C757D] text-[16px]'
              onFocus={(e) => {
                if (type === 'date') {
                  e.target.type = 'date'
                }
              }}
              onBlur={(e) => {
                if (!e.target.value && type === 'date') {
                  e.target.type = 'text'
                }
              }}
              onChange={onChange}
              ref={inputRef}
            />
          )}

          {floatingLabel && (
            <span className='text-[12px] text-[#6C757D] absolute left-4 top-4 -translate-y-1/2 pointer-events-none'>
              {floatingLabel}
            </span>
          )}

          {floatingLabel && (
            <input
              {...props}
              type={type === 'date' ? 'text' : type}
              id={label}
              placeholder={placeholder}
              name={name}
              aria-label={label}
              onChange={onChange}
              className='w-full pb-2 pt-6 px-[16px] bg-[#E9ECFA] focus:outline-none placeholder:text-[#6C757D] text-[14px]'
              onFocus={(e) => {
                if (type === 'date') {
                  e.target.type = 'date'
                }
              }}
              onBlur={(e) => {
                if (!e.target.value && type === 'date') {
                  e.target.type = 'text'
                }
              }}
              ref={inputRef}
            />
          )}
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

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.bool,
  inputRef: PropTypes.object,
  floatingLabel: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
}

export default Input
