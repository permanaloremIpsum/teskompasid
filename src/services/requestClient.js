import axios from "axios"

const reqClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

reqClient.interceptors.request.use((config) => {
  return config
})


export default reqClient