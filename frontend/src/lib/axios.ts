import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Request interceptor — attach token to every request
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('token')
        : null

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor — handle token expiry globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    // Token expired or invalid — log user out
    if (status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        document.cookie = 'token=; path=/; max-age=0'
        document.cookie = 'role=; path=/; max-age=0'
        window.location.href = '/sign-in'
      }
    }

    return Promise.reject(error)
  }
)

export default api