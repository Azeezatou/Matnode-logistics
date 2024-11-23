import { Loading, Notify } from 'notiflix'
import { useState } from 'react'
import HandShakeImage from '../../../assets/images/handshake.png'
import { quotesRequests } from '../../../libs/requests/quotes.request'
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

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted', formData)

    const reqData = {
      transportation_type: formData.serviceType,
      pickup: formData.pickUp,
      port_name: formData.portName,
      pickup_date: formData.pickDate,
      port_check_mark: !formData.noPort,
      delivery: {
        address: `${formData.city}, ${formData.country}, ${formData.zipCode}`,
      },
      container_type: formData.unitType,
      quantity: formData.quantity,
      overweight_checkmark: false,
      commodity: formData.commodity,
      freqency_of_shipment: formData.frequency,
      country: formData.country,
      city: formData.city,
      freight_term: formData.freighterTerm,
      quotation_date: formData.quantityValidityDate,
      target_price: formData.targetPrice,
      refigerated: formData.requiresRefrigeration,
      dangerous: formData.isDangerous,
      insurance: formData.requiresInsurance,
      customs_clearance: formData.isCustomBrokage ? 'Yes' : 'No',
      notes: formData.additionalNote,
    }

    console.log('Request data:', reqData)

    Loading.circle()

    const res = await quotesRequests.createNew(reqData)
    if (!res.success) {
      Loading.remove()
      return Notify.failure(res.message)
    }

    Loading.remove()
    setSubmitted(true)
    console.log('Response:', res)
  }

  return (
    <>
      {!submitted && (
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
                <AboutShipment
                  formData={formData}
                  handleChange={handleChange}
                />
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
      )}

      {submitted && (
        <div className='flex flex-col gap-[24px] justify-center items-center p-[56px]  bg-[#FFD426] w-[310px] md:w-[600px]'>
          <img
            src={HandShakeImage}
            alt='handshake image'
            className='w-[100px] md:w-[200px] h-[59.99px] md:h-[119.99px]'
          />

          <p className='text-[#1B1603] text-[24px] md:text-[56px] font-bold font-Oswald'>
            Thank you!
          </p>
          <p className='hidden md:block max-w-[380px] text-[16px] md:text-[22px] text-center'>
            Your quote request has been sent, we will reach ou to you within 24
            hrs.
          </p>

          <div>
            <p className='md:hidden max-w-[380px] text-[16px] md:text-[22px] text-center'>
              Your quote request has been sent,
            </p>

            <p className='md:hidden max-w-[380px] text-[16px] md:text-[22px] text-center'>
              we will reach ou to you within 24 hrs.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default QuoteForm
