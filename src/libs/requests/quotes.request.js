import { apiResponse, httpRequest } from '../http.lib'

export const quotesRequests = {
  createNew: async (body, setLoading) => {
    try {
      const res = await httpRequest(setLoading).post(`/quote`, body)

      return apiResponse(true, 'Quote created successfully.', res.data)
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  getAllQuotes: async (setLoading) => {
    try {
      const res = await httpRequest(setLoading).get(`/quote`)

      return apiResponse(true, 'Quotes fetched successfully.', res.data)
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
}
