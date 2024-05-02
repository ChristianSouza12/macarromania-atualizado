import axios from "axios";


 const apiMacarromania = axios.create({
    baseURL:"http://localhost:3001"
})

apiMacarromania.interceptors.request.use( async config => {
   
    const userData = await localStorage.getItem("macarromania:userData")
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`

    return config
})

export default apiMacarromania