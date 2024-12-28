import axios from 'axios'

export const apiResponse = (success, message, data) => {
  return {
    success,
    message,
    data,
  }
}

export const httpRequest = (setLoading) => {
  // Here we set the base URL for all requests made to the api
  const api = axios.create({
    baseURL: 'https://necessary-eye.pipeops.app/api/v1/',
    // baseURL: '.env',
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use(async (config) => {
    // set loading true on request if isLoading is not null
    if (setLoading) setLoading(true)

    const token = localStorage.getItem('token') // retrieve the token
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      }
    }

    return config
  })

  // This runs before any response is return
  api.interceptors.response.use(
    (response) => {
      // set loading false if isLoading is not null
      if (setLoading) setLoading(false)

      return response
    },
    (error) => {
      // set loading false if isLoading is not null
      if (setLoading) setLoading(false)

      // throw error
      return Promise.reject(error)
    }
  )

  return api
}
