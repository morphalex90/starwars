import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://swapi.dev/api',
    // headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     Authorization: 'Bearer ' + (typeof window !== "undefined" ? localStorage.getItem('access_token') : ''),
    // },
})

export default axios
