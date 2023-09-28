import React from 'react';
import ProductCard from '../Items/ProductCard';

const BrandProductList = ({ products }) => {
  return (
    <ul className="grid item2:grid-cols-2 item3:grid-cols-3 ">
        {products.map(( product ) => (
          <ProductCard product={ product }/>
        ))
        } 
      </ul>
   
  );
};

export default BrandProductList;