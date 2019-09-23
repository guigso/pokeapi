import axios from 'axios';

const api = axios.create({
  baseURL: 'https://guigso-pokeapi.herokuapp.com',
});

export default api;
