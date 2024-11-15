import { apiResponse, httpRequest } from '../http.lib'

export const authRequests = {
  login: async (
    body: {
      param: string
      password: string
    },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).post(`/auth/login`, body)

      return apiResponse(true, 'Logged in success.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  profile: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).get(`/auth/profile`)

      return apiResponse(true, 'Profile fetched successfully.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  sendOtp: async (
    body: {
      type: string
      destination: string
    },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).post(`/auth/otp/send`, body)

      return apiResponse(true, 'OTP sent successfully.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  verifyOtp: async (
    body: {
      key: string
      otp: string
    },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).post<VerifyOTPInterface>(
        `/auth/otp/verify`,
        body
      )

      return apiResponse(true, 'OTP verified successful.', res.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
}
