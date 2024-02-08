import axios from "axios"

export const BASE_URL="https://git.heroku.com/destination-wanderlust.git"

const Client = axios.create({baseURL: BASE_URL})

export default Client

