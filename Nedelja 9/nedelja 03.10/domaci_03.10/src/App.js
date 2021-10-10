import { useEffect, useState } from 'react';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import Total from './Components/Total';
import { getAllProducts } from './service';

const App = () => {
   const [product, setProduct] = useState([]);
   const [quantityList, setQuantityList] = useState([]);
   const [count, setCount] = useState(0);

   useEffect(() => {
      getAllProducts().then(response => {
         setProduct(response.data);
      });
   }, []);

   useEffect(() => {
      setQuantityList(product.map(product => ({ id: product.id, price: product.price, qty: 0 })));
   }, [count, product]);

   console.log(quantityList);

   return (
      <div>
         <h1>Add new product</h1>
         <ProductForm setProduct={setProduct} setCount={setCount} />
         <ProductList product={product} setQuantityList={setQuantityList} />
         <Total product={product} quantityList={quantityList} />
      </div>
   );
};

export default App;
