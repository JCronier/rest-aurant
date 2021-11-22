import axios from 'axios';

const url = 'http://localhost:3000/items';

export const fetchItems = () => axios.get(url);