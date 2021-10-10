import axios from 'axios';

const getAllProducts = () => {
   return axios.get('http://localhost:3005/products');
};

const postProduct = product => {
   return axios.post('http://localhost:3005/products', product);
};

export { getAllProducts, postProduct };
