import PropTypes from 'prop-types'

const QuoteOptionsCheckboxes = ({ formData, handleChange }) => {
  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-[44px] border-t-[0.5px] border-[#0000004D] pt-[24px]'>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-[12px]'>
        {/* requiresRefrigerationRef */}
        <div className='flex gap-[8px] items-center'>
          <input
            type='checkbox'
            value={formData.requiresRefrigeration}
            onChange={handleChange}
            name='requiresRefrigeration'
          />
          My shipment requires refrigeration
        </div>

        {/* insurance */}
        <div className='flex gap-[8px] items-center'>
          <input
            type='checkbox'
            value={formData.requiresInsurance}
            onChange={handleChange}
            name='requiresInsurance'
          />
          My shipment needs insurance
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 gap-[12px]'>
        {/* dangerous */}
        <div className='flex gap-[8px] items-center'>
          <input
            type='checkbox'
            value={formData.isDangerous}
            onChange={handleChange}
            name='isDangerous'
          />
          My shipment is dangerous
        </div>

        {/* insurance */}
        <div className='flex gap-[8px] items-center'>
          <input
            type='checkbox'
            value={formData.isCustomBrokage}
            onChange={handleChange}
            name='isCustomBrokage'
          />
          Custom brokerage
        </div>
      </div>
    </div>
  )
}

QuoteOptionsCheckboxes.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default QuoteOptionsCheckboxes
