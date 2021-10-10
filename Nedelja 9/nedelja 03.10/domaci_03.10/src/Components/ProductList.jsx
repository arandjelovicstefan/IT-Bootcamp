import Product from './Product';

const ProductList = ({ product, setQuantityList }) => {
   return (
      <div>
         {product.map(product => {
            return <Product key={product.id} product={product} setQuantityList={setQuantityList} />;
         })}
      </div>
   );
};

export default ProductList;
