import { useState } from 'react';
import { nanoid } from 'nanoid';
import { postProduct } from '../service';

const ProductForm = ({ setProduct, setCount }) => {
   const [inputName, setInputName] = useState('');
   const [inputPrice, setInputPrice] = useState('');
   const [inputInfo, setInputInfo] = useState('');

   return (
      <div>
         <label>Name:</label>
         <br />
         <input
            placeholder='product name'
            value={inputName}
            type='text'
            onChange={e => {
               setInputName(e.target.value);
            }}
         />
         <br />
         <label>Price:</label>
         <br />
         <input
            placeholder='product price'
            value={inputPrice}
            type='text'
            onChange={e => {
               setInputPrice(e.target.value);
            }}
         />
         <br />
         <label>Info:</label>
         <br />
         <input
            placeholder='product info'
            value={inputInfo}
            type='text'
            onChange={e => {
               setInputInfo(e.target.value);
            }}
         />
         <br />
         <button
            onClick={() => {
               let newProduct = {
                  name: inputName,
                  price: inputPrice,
                  info: inputInfo,
                  id: nanoid(),
               };
               postProduct(newProduct).then(response => {
                  setProduct(prev => {
                     return [...prev, response.data];
                  });
                  setCount(prev => [prev + 1]);
               });
            }}
         >
            Create product
         </button>
         <hr />
      </div>
   );
};

export default ProductForm;
