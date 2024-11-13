import { useRef, useState } from 'react'
import AboutShipment from './form/AboutShipment'
import Location from './form/Location'
import PickUp from './form/PickUp'
import ServiceType from './form/ServiceType'
const QuoteForm = () => {
  const [serviceType, setServiceType] = useState('')
  const [pickUp, setPickUp] = useState('')
  const [delivery, setDelivery] = useState('')
  const [calculationBy, setCalculationBy] = useState('Unit')
  const [measurementUnit, setMeasurementUnit] = useState('cm/kg')
  const portNameRef = useRef(null)
  const pickDateRef = useRef(null)
  const countryRef = useRef(null)
  const cityRef = useRef(null)
  const zipCodeRef = useRef(null)
  const unitTypeRef = useRef(null)
  const quantityRef = useRef(null)
  const weightRef = useRef(null)
  const lengthRef = useRef(null)
  const widthRef = useRef(null)
  const heightRef = useRef(null)

  return (
    <form className='bg-white w-[90%] shadow-lg pt-[32px] px-[56px] pb-[56px] right-1/2 left-1/2 transform -translate-x-1/2 absolute translate-y-[-100px]'>
      <div className='flex flex-col gap-[32px]'>
        <p className='font-Oswald text-[32px] font-bold'>
          Kindly fill this form
        </p>

        <ServiceType setServiceType={setServiceType} active={serviceType} />
        <PickUp setPickUp={setPickUp} active={pickUp} />
        <Location
          setCalculationBy={setCalculationBy}
          setMeasurementUnit={setMeasurementUnit}
          activeDelivery={delivery}
          portNameRef={portNameRef}
          pickDateRef={pickDateRef}
          countryRef={countryRef}
          cityRef={cityRef}
          zipCodeRef={zipCodeRef}
          unitTypeRef={unitTypeRef}
          quantityRef={quantityRef}
          weightRef={weightRef}
          lengthRef={lengthRef}
          widthRef={widthRef}
          heightRef={heightRef}
          calculationBy={calculationBy}
          measurementUnit={measurementUnit}
          setDelivery={setDelivery}
        />
        <AboutShipment />
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
