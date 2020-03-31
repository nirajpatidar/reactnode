import axios from 'axios';

export const authLogin = (values) => {
    console.log('values', values)
    return axios.post('http://localhost:8080/login', values);
}