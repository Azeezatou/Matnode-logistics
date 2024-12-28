import { PropTypes } from 'prop-types'

const RequestCard = ({ quote }) => {
  return (
    <div className='flex flex-col gap-[24px] border-[0.5px] border-[#3333331A] p-[24px] font-Rubik'>
      <div className='flex flex-col gap-[32px] text-[16px] text-[#3C3C3C]'>
        <div className='flex flex-col gap-1'>
          <p className='font-light'>Service:</p>
          <p className=''>{quote.transportation_type}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <p className='font-light'>Pickup:</p>
          <p className=''>
            {quote.pickup} &gt; {quote.port_name}
          </p>
        </div>
      </div>

      {/* Pick up and delivery section */}
      <div className='flex justify-between border-t-[0.5px] border-[#0000001A] pt-[24px]'>
        {/* Pickup */}
        <div className='flex flex-col gap-[12px]'>
          <p className='text-[14px] text-opacity-70 text-[#3C3C3CB2] font-semibold'>
            Pickup
          </p>

          <div className='flex flex-col gap-[8px] text-[16px] font-light text-[#3C3C3C]'>
            <p>
              Country: <span className='font-normal'>{quote.country}</span>
            </p>
            <p>
              Port name: <span className='font-normal'>{quote.port_name}</span>
            </p>
            <p>
              Date:{' '}
              <span className='font-normal'>
                {new Date(quote.pickup_date).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>

        {/* Delivery */}
        <div className='flex flex-col gap-[12px]'>
          <p className='text-[14px] text-opacity-70 text-[#3C3C3CB2] font-semibold'>
            Delivery
          </p>

          <div className='flex flex-col gap-[8px] text-[16px] font-light text-[#3C3C3C]'>
            <p>
              Country: <span className='font-normal'>{quote.country}</span>
            </p>
            <p>
              City: <span className='font-normal'>{quote.city}</span>
            </p>
            <p>
              Address:{' '}
              <span className='font-normal'>{quote.delivery.address}</span>
            </p>
          </div>
        </div>
      </div>
      {/* end of pick up and delivery section */}

      {/* Cargo details and packaging section */}
      <div className='flex justify-between border-t-[0.5px] border-[#0000001A] pt-[24px]'>
        {/* Cargo details */}
        <div className='flex flex-col gap-[12px]'>
          <p className='text-[14px] text-opacity-70 text-[#3C3C3CB2] font-semibold'>
            Cargo details
          </p>

          <div className='flex flex-col gap-[8px] text-[16px] font-light text-[#3C3C3C]'>
            <p>
              Commodity: <span className='font-normal'>{quote.commodity}</span>
            </p>
            <p>
              Frequency:{' '}
              <span className='font-normal'>{quote.freqency_of_shipment}</span>
            </p>
            <p>
              Quantity: <span className='font-normal'>{quote.quantity}</span>
            </p>
            <p>
              Validity:{' '}
              <span className='font-normal'>
                {new Date(quote.quotation_date).toLocaleDateString()}
              </span>
            </p>
            <p>
              Targeted price:{' '}
              <span className='font-normal'>${quote.target_price}</span>
            </p>
          </div>
        </div>

        {/* Packaging details */}
        <div className='flex flex-col gap-[12px]'>
          <p className='text-[14px] text-opacity-70 text-[#3C3C3CB2] font-semibold'>
            Packaging details
          </p>

          <div className='flex flex-col gap-[8px] text-[16px] font-light text-[#3C3C3C]'>
            <p>
              Unit type: <span className='font-normal'>Box</span>
            </p>
            <p>
              Quantity:{' '}
              <span className='font-normal'>{quote.quantity} boxes</span>
            </p>
            <p>
              Unit weight: <span className='font-normal'>30kg</span>
            </p>
            <p>
              Length: <span className='font-normal'>1.2m</span>
            </p>
            <p>
              Height: <span className='font-normal'>1.3m</span>
            </p>
          </div>
        </div>
      </div>
      {/* end of cargo details and packaging section */}

      {/* date and contact section */}
      <div className='flex justify-between border-t-[0.5px] border-[#0000001A] pt-[24px] text-[#3C3C3C]'>
        <div className='flex flex-col'>
          <p className='text-[14px] font-light'>Date received:</p>
          <p className='text-[16px] font-medium'>Jun 8th, 2023</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-[14px] font-light'>Sender contact</p>
          <p className='text-[16px] font-medium text-[#597AFF]'>
            sender123@gmail.com
          </p>
        </div>
      </div>
      {/* end of date and contact section */}
    </div>
  )
}

export default RequestCard

RequestCard.propTypes = {
  quote: PropTypes.object.isRequired,
}
