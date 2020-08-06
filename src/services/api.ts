import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/0597784c30db4de593d7497c439bea67'
});

export default api;