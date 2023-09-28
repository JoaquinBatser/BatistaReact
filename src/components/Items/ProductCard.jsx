import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({product}) => {
  
  return (
    <li  className="border-[1px] border-[#868583] hover:relative hover:shadow-3xl hover:border-2 hover:border-white transition-all hover:cursor-pointer" key={product.id}>
            
    <img src={product.image} alt="" />
    <div className="bg-white/80 px-4 py-1">
      <div className="flex justify-between items-center" >
        <small>{product.brand}</small>
        <span className="prodName font-extrabold text-xl tracking-wide hover:text-red-400 transition-all"><Link to={`/detail/${product.id}`}>{product.title.toUpperCase()}</Link></span>
        <small>${product.price}</small>
               
      </div>

    </div>
  </li>
  )
}

export default ProductCard