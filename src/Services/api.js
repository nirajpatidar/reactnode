import axios from 'axios';
import {BASE_URL} from '../config'
const api = axios.create({
    baseURL: BASE_URL
});
  api.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    
    let errorObj = Object.assign({}, error);
    if (Object.keys(errorObj).length == 0 || errorObj.response.status === 401 ){
      return Promise.reject(errorObj)
    }
    return Promise.reject(errorObj)
  });


  api.interceptors.request.use(function (config) {
    if(config.url.includes('/auth/signin') || config.url.includes('/user/resetPassword') || config.url.includes('/user/savePassword') || config.url.includes('/payment/register')) 
    return config;
    var token= JSON.parse(localStorage.getItem('token'))
    if(token === null) {
        // store.dispatch(authActions.logOut())
        window.location.href = "/login"
        return 
    }
    if(token!==undefined){
        config.headers.common['Authorization'] = `Bearer ${token.accessToken}`;
        // config.headers.common['Id-Token'] = token.id_token;
        // config.headers.common['Content-Type'] = 'application/json';
    }
    return config;
  });

export default api;