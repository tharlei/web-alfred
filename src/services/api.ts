import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/5eb2a6d7146d4eb5baa533b299d4ef74'
});

export default api;