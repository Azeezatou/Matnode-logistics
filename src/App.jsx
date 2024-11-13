
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Support from './components/Support'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <About/>
      <Services />
      <Support/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App