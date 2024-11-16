import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import Phone from '../../assets/images/Vector.png'
const Navbar = () => {
  return (
    <>
      <div
        className='px-[40px] py-2 mx-auto text-center flex justify-between items-center shadow'
        id='Navbar'
      >
        <div>
          <Link to='/'>
            <img src={Logo} alt='Matnode logo' className='md:w-36 w-24' />
          </Link>
        </div>
        <ul className='hidden md:flex gap-7  md:text-sm'>
          <li>
            <Link
              to='/'
              className='text-xl hover:border-b-4 hover:border-secondary active:border-secondary active:font-semibold'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='text-xl hover:border-b-4 hover:border-secondary active:border-secondary active:font-semibold'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              className='text-xl hover:border-b-4 hover:border-secondary active:border-secondary active:font-semibold'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='/support'
              className='text-xl hover:border-b-4 hover:border-secondary active:border-secondary active:font-semibold'
            >
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link
              to='/quote'
              className='text-xl hover:border-b-4 hover:border-secondary active:border-secondary active:font-semibold'
            >
              Get Quote
            </Link>
          </li>
        </ul>
        <div className='flex gap-1 m-2 '>
          <div className='text-end pr-3'>
            <div className='text-sm md:text-2xl'>FREE CALL IN U.S.A</div>
            <div>
              <a href='+234012916911' className='text-sm font-bold md:text-2xl'>
                +234 01-291 6911
              </a>
            </div>
          </div>
          <img src={Phone} alt='phone icon' className='size-6 md:size-8 m-auto ' />
        </div>
      </div>
    </>
  )
}

export default Navbar
