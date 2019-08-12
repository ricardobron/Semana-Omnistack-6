import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack66.herokuapp.com',
})

export default api;