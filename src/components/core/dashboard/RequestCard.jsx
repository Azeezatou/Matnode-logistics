const RequestCard = () => {
  return (
    <div className='flex flex-col gap-[24px] border-[0.5px] border-[#3333331A] p-[24px] font-Rubik'>
      <div className='flex flex-col gap-[32px] text-[16px] text-[#3C3C3C]'>
        <div className='flex flex-col gap-1'>
          <p className='font-light'>Service:</p>
          <p className=''>Air</p>
        </div>

        <div className='flex flex-col gap-1'>
          <p className='font-light'>Pickup:</p>
          <p className=''>Exw &gt; Port</p>
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
              Country: <span className='font-normal'>Nigeria</span>
            </p>
            <p>
              Port name:{' '}
              <span className='font-normal'>LOS/Murtala Muhammed</span>
            </p>
            <p>
              Date: <span className='font-normal'>13/09/2024</span>
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
              Country: <span className='font-normal'>USA</span>
            </p>
            <p>
              City: <span className='font-normal'>New York</span>
            </p>
            <p>
              Zip Code: <span className='font-normal'>10001</span>
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
              Commodity: <span className='font-normal'>Electronics</span>
            </p>
            <p>
              Frequency: <span className='font-normal'>Frequency: Weekly</span>
            </p>
            <p>
              Quantity: <span className='font-normal'>1</span>
            </p>
            <p>
              Validity: <span className='font-normal'>13/12/2024</span>
            </p>
            <p>
              Targeted price: <span className='font-normal'>$557</span>
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
              Quantity: <span className='font-normal'>5 boxes</span>
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
