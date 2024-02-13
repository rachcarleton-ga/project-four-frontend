import axios from "axios"
import { config } from "dotenv"

export const BASE_URL="http://localhost:4000/"

// "https://destination-wanderlust-00e92fff4f50.herokuapp.com/"

const Client = axios.create({baseURL: BASE_URL})

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)
export default Client

