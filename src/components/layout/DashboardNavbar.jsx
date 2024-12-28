import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { useAuth } from '../../contexts/AuthContext'

const DashboardNavbar = () => {
  const authContext = useAuth()
  return (
    <>
      <div
        className='px-[40px] py-2 mx-auto text-center flex justify-between items-center shadow'
        id='Navbar'
      >
        <div>
          <Link to='/'>
            <img src={Logo} alt='Matnode logo' className='sm:w-32 w-28' />
          </Link>
        </div>

        <div className='flex gap-4 sm:text-sm'>
          <button
            className='flex items-center gap-2'
            onClick={() => authContext.logout()}
          >
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 19.5H3C2.46957 19.5 1.96086 19.2893 1.58579 18.9142C1.21071 18.5391 1 18.0304 1 17.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H7M14 15.5L19 10.5M19 10.5L14 5.5M19 10.5H7'
                stroke='#CC1313'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Log out
          </button>
        </div>
      </div>
    </>
  )
}

export default DashboardNavbar
