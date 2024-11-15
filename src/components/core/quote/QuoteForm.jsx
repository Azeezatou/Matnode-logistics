import { useState } from 'react'
import AboutShipment from './form/AboutShipment'
import CargoDetails from './form/CargoDetails'
import Location from './form/Location'
import PickUp from './form/PickUp'
import QuoteContact from './form/QuoteContact'
import QuoteOptionsCheckboxes from './form/QuoteOptionsCheckboxes'
import ServiceType from './form/ServiceType'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    pickUp: '',
    delivery: '',
    calculationBy: 'Unit',
    measurementUnit: 'cm/kg',
    portName: '',
    pickDate: '',
    country: '',
    city: '',
    zipCode: '',
    unitType: '',
    quantity: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    hsCode: '',
    currency: '',
    noPort: false,
    vat: '',
    commodity: '',
    frequency: '',
    freighterTerm: '',
    quantityValidityDate: '',
    targetPrice: '',
    cost: '',
    freight: '',
    duty: '',
    levy: '',
    insurance: '',
    description: '',
    requiresRefrigeration: false,
    isDangerous: false,
    requiresInsurance: false,
    isCustomBrokage: false,
    additionalNote: '',
    email: '',
    phone: '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted', formData)

    const formData = {}
  }

  return (
    <form
      className='bg-white w-[90%] shadow-lg pt-[24px] md:pt-[32px] px-[16px] md:px-[56px] pb-[24px] md:pb-[56px]'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-[32px]'>
        <p className='font-Oswald text-[32px] font-bold'>
          Kindly fill this form
        </p>

        <ServiceType formData={formData} setFormData={setFormData} />

        {formData.serviceType !== '' && (
          <PickUp formData={formData} setFormData={setFormData} />
        )}

        {formData.pickUp !== '' && (
          <Location
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        )}

        {formData.calculationBy === 'Total Shipment' &&
          formData.delivery === 'Port' && (
            <AboutShipment formData={formData} handleChange={handleChange} />
          )}

        <CargoDetails
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />

        {formData.commodity && formData.frequency && (
          <QuoteOptionsCheckboxes
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        )}

        {formData.commodity && formData.frequency && (
          <QuoteContact
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        )}

        {formData.email && formData.phone && (
          <div className='flex flex-col gap-[8px]'>
            <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
              Additional note
            </p>

            <textarea
              className='bg-[#E9ECFA] p-[16px] outline-none'
              placeholder='Type note here'
              onChange={handleChange}
              name='additionalNote'
              value={formData.additionalNote}
            />
          </div>
        )}
      </div>

      <button
        type='submit'
        className='bg-[#FFD426] hover:opacity-80 transition-all duration-300 h-[54px] w-[224.78px] font-Rubik text-[16.2px] mt-20'
      >
        Submit Quote
      </button>
    </form>
  )
}

export default QuoteForm
