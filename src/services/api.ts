import axios from 'axios'
const BASE_URL = import.meta.env.VITE_APP_ENDPOINT_URL as string

const api = axios.create({
    baseURL: BASE_URL
});

export default api