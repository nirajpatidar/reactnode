import axios from 'axios';

export const authLogin = (values) => {
    console.log('values', values)
    return axios.post('http://node-2020.herokuapp.com/login', values);
}