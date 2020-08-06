import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/975f38f64a504e01beaec786e2c3e721'
});

export default api;