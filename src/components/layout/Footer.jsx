import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Services',
    link: '/#services',
  },
  {
    title: 'Get Quote',
    link: '/#quote',
  },
  {
    title: 'Contact Us',
    link: '/#contact',
  },
]
const Footer = () => {
  return (
    <div className='pt-10  px-4 md:px-20 lg:px-32 bg-[#1B1603] w-full overflow-hidden text-white'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={Logo} className='sm:w-24 w-28 ' />
          <div className='flex items-center gap-3 mt-8 -ml-2'>
            <Link to='#'>
              <FaFacebookF className='text-3xl hover:text-primary duration-300' />
            </Link>
            <Link to='#'>
              <FaTwitter className='text-3xl hover:text-primary duration-300' />
            </Link>
            <Link to='#'>
              <AiFillInstagram className='text-3xl hover:text-primary duration-300' />
            </Link>
            <Link to='#'>
              <FaYoutube className='text-3xl hover:text-primary duration-300' />
            </Link>
          </div>
        </div>
        {/* Links */}
        <div className='font-Rubik w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='font-bold'>Quick Links</h3>
          <div className='border-b-2 border-secondary w-1/5 my-2'></div>
          {FooterLinks.map((footer) => (
            <ul>
              <li className='py-1'>{footer.title}</li>
            </ul>
          ))}
        </div>
        {/* Contact */}
        <div className='w-full md:w-1/3'>
          <h3 className='font-bold'>Contact</h3>
          <div className='border-b-2 border-secondary w-1/6 my-2'></div>
          <p>
            <span className='text-blue-600'>Address:</span> 8, Eniyansoro
            Beyioku Street, off Ajao St, Surulere, Lagos
          </p>
          <p className=' my-2'>
            <span className='text-blue-600'>Email:</span> office@matnode.com
          </p>
          <p>
            <span className='text-blue-600'>Phone number:</span> +234 01-291
            6911
          </p>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center font-Rubik '>
        © Copyright Matnode 2024 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
