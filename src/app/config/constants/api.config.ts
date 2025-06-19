export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000/api', // Ajusta esto a tu URL de backend
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout'
    },
    ORDERS: {
      BASE: 'http://localhost:8000/api/orders',
      LIST: '', // GET /api/orders?skip&limit
      DETAIL: (id: string) => `/${id}`,
      UPDATE: (id: string) => `/${id}`
    }
  }
}; 