import { useState } from 'react';

const Product = ({ product, setQuantityList }) => {
   const [show, setShow] = useState(false);
   const [quantity, setQuantity] = useState(0);

   return (
      <div>
         <p style={{ fontWeight: 'bold' }}>
            {product.name} : ${product.price}
         </p>
         <p> qty: {quantity} </p>
         <button
            onClick={() => {
               setShow(!show);
            }}
         >
            show info
         </button>
         <br />
         <button
            onClick={() => {
               setQuantity(quantity + 1);
               setQuantityList(prev => {
                  let copy = [...prev];
                  let find = copy.find(el => el.id === product.id);
                  find.qty = quantity + 1;
                  return copy;
               });
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               if (quantity === 0) {
                  setQuantity(0);
               } else {
                  setQuantity(quantity - 1);
               }
               setQuantityList(prev => {
                  let copy = [...prev];
                  let find = copy.find(el => el.id === product.id);
                  find.qty = quantity ? quantity - 1 : quantity;
                  return copy;
               });
            }}
         >
            -
         </button>
         <p> {show ? product.info : ''} </p>
      </div>
   );
};

export default Product;
