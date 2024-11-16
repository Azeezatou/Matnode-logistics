import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [user, setUser] = useState(localStorage.getItem('user') || null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Check authentication status when route changes
    if (location.pathname === '/dashboard' && (!token || !user)) {
      navigate('/')
    }
  }, [location, token, user, navigate])

  const login = (userData, authToken) => {
    setUser(userData)
    setToken(authToken)
    localStorage.setItem('token', authToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    navigate('/')
  }

  const value = {
    token,
    user,
    login,
    logout,
    setUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
