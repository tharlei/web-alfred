import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/75d1dfff2f26423c8e222e550fda6a84'
});

export default api;