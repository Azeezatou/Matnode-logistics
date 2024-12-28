import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import DashboardPageView from './views/DashboardPageView'
import HomePageView from './views/HomePageView'
import QuotePageView from './views/QuotePageView'
import SignInPageView from './views/SigninPageView'
import SignUpPageView from './views/SignupPageView'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePageView />} />
          <Route path='/quote' element={<QuotePageView />} />
          <Route path='/login' element={<SignInPageView />} />
          <Route path='/register' element={<SignUpPageView />} />
          <Route path='/dashboard' element={<DashboardPageView />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
