import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/0c4318ddde164c1b82a558db37e9013e'
});

export default api;