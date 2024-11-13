import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePageView from './views/HomePageView'
import QuotePageView from './views/QuotePageView'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePageView />} />
        <Route path='/quote' element={<QuotePageView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
