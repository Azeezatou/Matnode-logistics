import React from 'react'
import Crane from '../../../assets/images/crane.jpg'
import Box from '../../../assets/images/Objects.png'
import Bus from '../../../assets/stuff/bus.png'
import Customer from '../../../assets/stuff/customer.png'
import Delivery from '../../../assets/stuff/delivery.png'
import Cost from '../../../assets/stuff/hand-icon.png'
import Quote from '../../../assets/stuff/qt-icon.png'

const Solutions = [
  {
    image: Delivery,
    title: 'Safe Delivery',
    description: 'Your cargo is safe with us',
  },
  {
    image: Cost,
    title: 'Budget-friendly',
    description: 'Affordable solution',
  },
  {
    image: Bus,
    title: 'On-time delivery',
    description: 'We prioritize punctuality',
  },
  {
    image: Customer,
    title: 'Customer support',
    description: 'Our team is always ready to assist',
  },
]

export const SupportSection = () => {
  return (
    <div>
      <div className='border-2 border-secondary relative text-center m-12 p-5 leading-10'>
        <img
          src={Quote}
          alt='Quote icon'
          className='absolute right-0 -top-6 sm:w-16 md:w-20 w-20'
        />
        <h3 className='font-Rubik text-xs uppercase mb-2'>
          {' '}
          24/7 active support team
        </h3>
        <h2 className='text-secondary text-3xl font-bold font-Oswald'>
          Need Immediate Support Or Any Help?
        </h2>
        <h2 className='font-medium font-Rubik text-xl text-[#0B2F44] mt-3'>
          {' '}
          +234 01-291 6911
        </h2>
      </div>
    </div>
  )
}

const Support = () => {
  return (
    <div className='container mb-12'>
      {/* Support Heading */}
      <SupportSection />

      {/* Why Choose Us */}
      <div className='flex flex-col md:flex-row md:items-start items-center mx-auto justify-between max-w-7xl sm:items-start py-8'>
        {/* text */}
        <div className=' flex-1 md:mr-4 mb-8 md:mb-o max-w-1/3 my-5 py-5 -mr-6 w-1/2'>
          <h2 className=' uppercase text-4xl font-Oswald stroke-text2 my-3 py-2'>
            Why Choose Us
          </h2>
          <h1 className='font-bold font-Oswald md:text-4xl py-2 text-3xl mb-4'>
            Simple, cost-effective solutions
          </h1>
          <p className='font-PtSans tracking-wide'>
            Matnode takes pride in the services it provides to its clients.
            Delivering highly innovative solutions to our clients. We have an
            experienced team with a wide variety of services. Matnode is known
            for the cost-effective and smooth delivery of cargo. You can be
            confident that our strategic alliances around the globe will give
            you the flexibility to choose from a range of air and ocean freight
            service options.
          </p>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-4 my-6'>
              {Solutions.map((solution) => (
                <div key={solution.title}>
                  <img src={solution.image} className='py-1' />
                  <p className='font-Oswald font-extrabold'>{solution.title}</p>
                  <p className='font-Rubik text-sm font-thin'>
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <img
            src={Crane}
            alt='Crane on a sea'
            className='w-full h-auto object-cover shadow'
          />
        </div>
      </div>
      {/* Last section */}
      <div className='container bg-primary flex mb-2 md:mb-4'>
        <img
          src={Box}
          alt='image of a box containing parcel'
          className='w-1/2 h-full'
        />
        <div className='text-left m-auto'>
          <h2 className='font-Oswald font-extrabold text-[#1b1603] text-2xl md:text-6xl mb-5'>
            Get your items delivered smoothly and on time
          </h2>
          <button className='bg-[#1b1603] my-4 text-white p-9 text-sm md:text-xl lg:px-5 py-3 font-Rubik font-semibold text-center uppercase hover:text-black hover:bg-primary hover:border-2 hover:border-black'>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Support
