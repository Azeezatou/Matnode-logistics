import { apiResponse, httpRequest } from '../http.lib'

export const hscodeRequests = {
  login: async (body, setLoading) => {
    try {
      const res = await httpRequest(setLoading).post(`/auth/login`, body)

      return apiResponse(true, 'Logged in success.', res.data)
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },

  register: async (body, setLoading) => {
    try {
      const res = await httpRequest(setLoading).post(`/auth/register`, body)

      return apiResponse(true, 'registered success.', res.data)
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },

//   getDetails: async (setLoading) => {
//     try {
//       const res = await httpRequest(setLoading).get(`/auth/profile`)

//       return apiResponse(true, 'Profile fetched successfully.', res.data)
//     } catch (err) {
//       return apiResponse(
//         false,
//         err?.response?.data?.message || err?.message || 'Error occurred.',
//         err
//       )
//     }
//   },

getHscodeDetails: async (cetCode, setLoading) => {
    try {
      const res = await httpRequest(setLoading).get(`/hscode/details`, {
        params: { cetCode },
      });

      return apiResponse(true, 'HS Code details fetched successfully.', res.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      );
    }
  },
}
