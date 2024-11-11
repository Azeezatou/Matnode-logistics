import React from 'react'
import Woman from "../assets/images/aboout-section-photo.jpg"

const About = () => {
  return (
    <div className=" flex flex-col md:flex-row h-auto md:space-x-0 items-start p-8 m-10">
        {/* Left About Section */}
        <div className="md:w-3/4 mb-2 md:mb-0">
          <img src={Woman} alt="woman in warehouse" className="w-full h-screen md:w-2/3 shadow-lg sm:-translate-x-11 max-h-[300px]"/>
        </div>

        {/* Right About Section */}
        <div className="md:w-4/5 ">
          <h3 className="font-bold font-Oswald text-2xl text-left text-secondary">ABOUT US</h3>
          <h1 className="font-bold font-Oswald text-3xl my-3">Welcome To Matnode</h1>
          <p className="font-Rubik mb-4">Matnode is a Nigerian, group-owned company founded in 2010, has <br/>
            grown through persistence and competitiveness in the field of Total <br/>
            Logistics. Reliability and carefulness have always been our principal <br/> aims, providing safe and reliable solutions.
          </p>
          <p className="font-Rubik mb-4">
            Client from different industries rely on us when dispatching <br/> their products safely, quickly and cheaply.
          </p>
          <p className="font-Rubik mb-6">
            We are passionate, disciplined, and technology-enabled in providing <br/> our valued clients with our services for satisfaction, cognizant of<br/> the uniqueness of each of our clients, by customizing simple, cost- <br/> effective solutions, we make sure that we meet their diverse <br/> business needs.
          </p>
          <button className="font-Rubik font-semibold border-2 border-secondary text-xl text-secondary w-auto px-6 py-2 hover:bg-secondary hover:text-white">
            CONTACT US
          </button>
        </div>
    </div>
  )
}

export default About