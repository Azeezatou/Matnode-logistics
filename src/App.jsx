
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Support from './components/Support'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services />
      <Support/>
      <Footer/>
    </>
  )
}

export default App