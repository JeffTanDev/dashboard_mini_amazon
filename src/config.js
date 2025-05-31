 // choose the correct environment variables based on the current environment
const env = import.meta.env.MODE || 'development';
const isDevelopment = env === 'development';

// export environment variables
export const CONTENT_SERVICE_URL = isDevelopment 
  ? import.meta.env.VITE_CONTENT_SERVICE_URL_DEV 
  : import.meta.env.VITE_CONTENT_SERVICE_URL_PROD;