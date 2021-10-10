const Total = ({ quantityList }) => {
   let totalPrice = quantityList.map(product => product.price * product.qty).reduce((a, b) => a + b, 0);

   return (
      <div>
         <hr />
         <p>Price: {(totalPrice * 80) / 100}</p>
         <p>Tax: 20 %</p>
         <p>Total price: {totalPrice}</p>
      </div>
   );
};

export default Total;
