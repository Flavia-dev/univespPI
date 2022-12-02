import axios from "axios";

const http = axios.create({
    baseURL: 'https://flavia-dev.github.io/api-univesp-pi3/'
})

export default http