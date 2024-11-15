import PropTypes from 'prop-types'

const Button = ({ className, children, ...props }) => {
  return (
    <button
      type='submit'
      className={`bg-[#FFD426] font-Roboto font-semibold hover:opacity-80 transition-all duration-300 h-[54px] px-[40px]  text-[16.2px] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
