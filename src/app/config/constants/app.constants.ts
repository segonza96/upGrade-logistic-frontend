export const API_CONFIG = {
  BASE_URL: 'https://api.example.com',
  TIMEOUT: 30000,
  VERSION: 'v1'
};

export const APP_CONFIG = {
  APP_NAME: 'upGrade Logistics',
  DEFAULT_LANGUAGE: 'es',
  SUPPORTED_LANGUAGES: ['es', 'en'],
  DATE_FORMAT: 'DD/MM/YYYY',
  TIME_FORMAT: 'HH:mm:ss'
};

export const ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
  LOGISTICS: {
    DASHBOARD: '/logistics/dashboard',
    ORDERS: '/logistics/orders',
    INVENTORY: '/logistics/inventory'
  }
}; 