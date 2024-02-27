import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  // baseURL: '', 

//local api

  baseURL: 'http://localhost:4010/automodo', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance