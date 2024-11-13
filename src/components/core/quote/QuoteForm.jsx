import { useRef, useState } from 'react'
import AboutShipment from './form/AboutShipment'
import CargoDetails from './form/CargoDetails'
import Location from './form/Location'
import PickUp from './form/PickUp'
import QuoteContact from './form/QuoteContact'
import QuoteOptionsCheckboxes from './form/QuoteOptionsCheckboxes'
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
  const hsCodeRef = useRef(null)
  const currencyRef = useRef(null)
  const vatRef = useRef(null)
  const commodityRef = useRef(null)
  const frequencyRef = useRef(null)
  const freighterTermRef = useRef(null)
  const quantityValidityDateRef = useRef(null)
  const targetPriceRef = useRef(null)
  const costRef = useRef(null)
  const freightRef = useRef(null)
  const dutyRef = useRef(null)
  const levyRef = useRef(null)
  const insuranceRef = useRef(null)
  const descriptionRef = useRef(null)
  const requiresRefridgementRef = useRef(null)
  const isDangerousRef = useRef(null)
  const requiresInsuranceRef = useRef(null)
  const isCustomBrokageRef = useRef(null)
  const additionalNoteRef = useRef(null)

  return (
    //  <form className='bg-white w-[90%] shadow-lg pt-[32px] px-[56px] pb-[56px] right-1/2 left-1/2 transform -translate-x-1/2 absolute translate-y-[-100px]'></form>
    <form className='bg-white w-[90%] shadow-lg pt-[24px] md:pt-[32px] px-[16px] md:px-[56px] pb-[24px] md:pb-[56px]'>
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
        <AboutShipment
          hsCodeRef={hsCodeRef}
          currencyRef={currencyRef}
          vatRef={vatRef}
          targetPriceRef={targetPriceRef}
          costRef={costRef}
          freightRef={freightRef}
          dutyRef={dutyRef}
          levyRef={levyRef}
          insuranceRef={insuranceRef}
          descriptionRef={descriptionRef}
        />

        <CargoDetails
          commodityRef={commodityRef}
          frequencyRef={frequencyRef}
          freighterTermRef={freighterTermRef}
          quantityValidityDateRef={quantityValidityDateRef}
          targetPriceRef={targetPriceRef}
        />

        <QuoteOptionsCheckboxes
          requiresRefrigerationRef={requiresRefridgementRef}
          isDangerousRef={isDangerousRef}
          requiresInsuranceRef={requiresInsuranceRef}
          isCustomBrokageRef={isCustomBrokageRef}
        />

        <QuoteContact />

        <div className='flex flex-col gap-[8px]'>
          <p className='text-[#3C3C3C] text-[15px] font-bold font-Rubik'>
            Additional note
          </p>

          <textarea
            className='bg-[#E9ECFA] p-[16px] outline-none'
            placeholder='Type note here'
            ref={additionalNoteRef}
          />
        </div>
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
