import PropTypes from 'prop-types'

const QuoteOptionsCheckboxes = ({
  requiresRefrigerationRef,
  isDangerousRef,
  requiresInsuranceRef,
  isCustomBrokageRef,
}) => {
  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-[44px] border-t-[0.5px] border-[#0000004D] pt-[24px]'>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-[12px]'>
        {/* requiresRefrigerationRef */}
        <div className='flex gap-[8px] items-center'>
          <input type='checkbox' ref={requiresRefrigerationRef} />
          My shipment requires refrigeration
        </div>

        {/* insurance */}
        <div className='flex gap-[8px] items-center'>
          <input type='checkbox' ref={requiresInsuranceRef} />
          My shipment needs insurance
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 gap-[12px]'>
        {/* dangerous */}
        <div className='flex gap-[8px] items-center'>
          <input type='checkbox' ref={isDangerousRef} />
          My shipment is dangerous
        </div>

        {/* insurance */}
        <div className='flex gap-[8px] items-center'>
          <input type='checkbox' ref={isCustomBrokageRef} />
          Custom brokerage
        </div>
      </div>
    </div>
  )
}

QuoteOptionsCheckboxes.propTypes = {
  requiresRefrigerationRef: PropTypes.object.isRequired,
  isDangerousRef: PropTypes.object.isRequired,
  requiresInsuranceRef: PropTypes.object.isRequired,
  isCustomBrokageRef: PropTypes.object.isRequired,
}

export default QuoteOptionsCheckboxes
