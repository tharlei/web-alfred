import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/80909cf0ddd6412db3e19764e23787c3/'
});

export default api;