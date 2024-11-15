import PropTypes from 'prop-types'
import craneBg from '../../../assets/images/crane.jpg'

const AuthLayout = ({ children }) => {
  return (
    <div
      className='flex h-screen items-center justify-center p-[24px] md:p-0'
      style={{
        backgroundImage: `url(${craneBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayout
