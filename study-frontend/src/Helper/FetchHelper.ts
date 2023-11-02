import axios from 'axios'
import useCheckJWT from '../Helper/JWTHepler';

const { checkJWT } = useCheckJWT();


axios.interceptors.request.use(
    config => {
        if(checkJWT())
        {
            const token = sessionStorage.getItem("jwtAccess")
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token
            }
            // config.headers['Content-Type'] = 'application/json';
        }
        return config

    },
    error => {
      Promise.reject(error)
    }
)
