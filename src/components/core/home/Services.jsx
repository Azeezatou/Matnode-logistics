import React from 'react'
import Truck from '../../../assets/stuff/01.png'
import Ship from '../../../assets/stuff/02.png'
import Airplane from '../../../assets/stuff/03.png'
import Train from '../../../assets/stuff/04.png'
import Trolley from '../../../assets/stuff/05.png'
import Note from '../../../assets/stuff/06.png'

const services = [
  {
    id: 1,
    title: 'Logistics',
    description:
      'Every business deserves to improve process delivery.Matnode provides the technical know-how to achieve project deliverables within cost saving plans. With our over 15 years’ of experience, Matnode Logistics has performed end-to-end delivery services ensuring that the supply needs of buyers, sellers, international manufacturers, distributors and retailers from a diverse range of industries recieve goods at the right time and cost. We understand the importance of Logistics hence we provide the services in Import & Export, Customs Clearance, Transporting & Warehousing services worldwide.',
    iconColor: 'bg-secondary',
    image: Truck,
  },
  {
    id: 2,
    title: 'International Freight',
    description:
      'Matnode provides seamless services tailored to your precise needs with end-to-end visibilty. Along with our logistics partners and reliabe transportation carriers, we are abeto coordinate air, sea, rail and land by managing exportation and importation, planning schedules to match up with the need to actualize best rates, delivering at the right time, applying the right resources to achieve safety of consignments and quality in our operations With our extensive experience and country-wide network of service providers, Matnode provides combined solutions for all your supply chain needs at the domestic level. Apart from delivering your shipments safely and timely, we ensure total control and visibility of your consignments throughout their transportation till final delivery.',
    iconColor: 'bg-secondary',
    image: Ship,
  },
  {
    id: 3,
    title: 'Custom Brokerage',
    description:
      'Customs clearance is a mandatory process when you need to ship internationally, whether importing or exporting, the consequences of non-compliance can include costly penalties, shipping delays and the retroactive assessment of duties. We undertake Customs Clearance of all kinds of all allowed commodities for import and export at any location. Matnode provides highly professional services in providing the right documentation and approval for import and export goods, our team includes trained and experienced team includes trained and experienced personnel with good working relationship with customs officials and well versed with the rules and regulations governing imports and exports, ensuring quick presentation and trouble free movement of goods within 24 working hours for air freight and 72 working hours for ocean freight.',
    iconColor: 'bg-secondary',
    image: Airplane,
  },
  {
    id: 4,
    title: 'Supply Chain',
    description:
      "Matnode recognizes clients' need for efficient global supply chain solutions to enhance their ability in the global village and maximize profit with reduced inventory and facilities investment. From sourcing the components raw materials, intermediates to forwarding, customs clearance, warehousing, sorting, packing and sub-assembling, tax management, transportation & final delivery requirements. Through multi-party logistic services (3PL/4PL), we bring to you the best practices of supply chain management end-to-end solutions. These services are done alongside you for costs and performance so that you can focus on your core business functions while we focus on what we are good at. This synergy means improvement of your business performance and objectives while saving your operational costs with the additional benefit of global practices being applied to your supply chain processes.",
    iconColor: 'bg-secondary',
    image: Train,
  },
  {
    id: 5,
    title: 'Warehousing and Distribution',
    description:
      "Matnode offer dedicated and shared warehousing and distribution operations warehousing and distribution operations that accommodate any particular requirement of our customers business, as well as a number of smart value-added services that improves performance of supply chain. By understanding and anticipating our clients logistical essentials, we provide planning, implementation and on-site management that generate real value for our client's business, ensuring delivery to the destinations in a smooth and cost-efficient manner We are engaged in offering reliable transportation services with seamless connectivity through a different combination of trucks. Our professionals match your goods with the right vehicle and the right route, with the ability to restructure plans if conditions change. We drive the process from end-to-end logistics while providing a custom solution to meet your needs These warehouses are well equipped with the latest warehouse management systems and cargo moving & handling equipment. We also offer value added services such as packaging, labelling, sorting, segregation etc. as per client's requirements",
    iconColor: 'bg-secondary',
    image: Trolley,
  },
  {
    id: 6,
    title: 'Project Logistics',
    description:
      'With our vast experience in trade and relationship with shipping companies, Port Authorities, Custom agencies, Road Transport authorities and International Agencies enables us to offer robust service, from perfect planning to correct execution and finalization of project. Matnode project experts supervise all the Out of gauge (OOG), Over dimensional (ODC), Break Bulk (BB), Oversized loads and Heavy lift cargoes, including shipments that are made of various components which need to be disassembled for transportation and reassembled after delivery. Whereas, it enables us to identify the most cost-effective routes that allows our clients to ensure the timely delivery of their equipment.',
    iconColor: 'bg-secondary',
    image: Note,
  },
]
const Services = () => {
  return (
    <div className='bg-[#f9f9f9] p-8' id='services'>
      {/* Lorem Ipsum */}
      <div className=' p-5'>
        <div className='text-center '>
          <h3 className='font-bold font-Oswald text-3xl  stroke-text2 tracking-wide'>
            OUR SERVICES
          </h3>
          <h1 className='font-bold font-Oswald text-3xl md:text-4xl my-3'>
            Trusted for our Services
          </h1>
          <p className='font-Rubik mb-4 items-center'>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry <br /> the standard dummy text ever since the when a
            printer took. */}
          </p>
        </div>
      </div>

      {/* Grid section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container'>
        {services.map((service) => (
          <div className='transform transition-transform duration-300 hover:scale-90 '>
            <div className='relative p-6 m-5 bg-white  shadow-md hover:shadow-lg transition-shadow border '>
              <div className='absolute left-0 top-0 w-2 h-14 bg-[#ff8a00]'> </div>
              <div className='flex'>
                <img src={service.image} className='max-w-12 mb-4' />
              </div>
              <div className='flex mb-4 '>
                <div className='text-[#ff8a00] font-Oswald font-extrabold text-5xl mr-3'>
                  0{service.id}
                </div>
                <h2 className=' text-xl font-semibold font-Oswald text-black mb-2 '>
                  {service.title}
                </h2>
              </div>
              <p className='text-gray-700 font-normal font-Rubik text-sm'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
