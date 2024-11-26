import React from 'react'
import { Link } from 'react-router-dom'
import Box from '../../../assets/images/hero-box.png'
import Port from '../../../assets/images/port.jpg'

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row h-auto md:bg-[url('../assets/images/port.jpg')] ">
      {/* Left hero section */}
      <div className=' text-white bg-[#1b1603] md:p-24 p-16 flex flex-col items-center justify-center md:w-1/2 min-h-[620px] '>
        <div className='relative container '>
          <div className='transparent '>
            <h1 className='absolute stroke-text text-[80px] sm:text-[100px] md:text-[100px] lg:text-[130px] font-Oswald tracking-tight font-extralight'>
              EFFICIENT
            </h1>
            <img
              src={Box}
              alt='box image'
              className='relative -top-8 -left-14 md:w-26 hover:animate-bounce'
            ></img>
          </div>
          <div className='text-white font-Oswald font-extrabold '>
            <h2 className=' text-[70px] sm:text-[80px] md:text-[90px] lg:text-[120px] -my-6 md:mt-5 md:-mb-10 '>
              PROCESS
            </h2>
            <h2 className='text-[70px] sm:text-[80px] md:text-[90px] lg:text-[120px]'>
              DELIVERY
            </h2>
          </div>
          <p className='font-Rubik text-xl md:text-2xl pt-4 pb-2 my-3'>
            Tailored services to your satisfaction.....
          </p>
          <Link to='/quote'>
            <button className='bg-primary text-[#1b1603] text-sm px-7 py-3 font-Rubik font-medium text-center tracking-wider hover:bg-[#1b1603] hover:text-primary hover:border-2 hover:border-primary'>
            GET QUOTE
            </button>
          </Link>
        </div>
      </div>
      {/* Right hero section */}
      <div className='relative md:w-1/2'>
        <img
          src={Port}
          alt='port and cargo dock'
          className='w-full h-full object-cover opacity-90 transform scale-x-[-1]'
        />
        <div className='relative -bottom-9 items-end flex'>
          <div className=' absolute right-0 bg-slate-50 p-2 flex'>
            <div className='text-left mx-3'>
              <h3 className='text-black text-3xl font-bold font-SpaceGrotesk'>
                26 K
              </h3>
              <p className='text-black text-sm font-Roboto'>
                Satisfied Customers
              </p>
            </div>
            <div className=' border-zinc-800 border-dashed border-r-2 mx-2'></div>
            <div className='text-left mx-3'>
              <h3 className='text-black text-3xl font-bold font-SpaceGrotesk'>
                12 +
              </h3>
              <p className='text-black text-sm font-Roboto'>
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
