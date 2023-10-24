import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({item}) => {
  
  return (
    <Link to={`/detail/${item.id}`}>
      <li  className="transition-all hover:cursor-pointer hover:shadow-lg rounded text-[#fefefe] flex justify-center flex-col hover:bg-white hover:border hover:border-white hover:text-black" key={item.id}>
              
      <img className='rounded' src={item.image} alt="" />
      <div className="p-2">
        <div className="flex justify-between items-start" >
          <div className='flex flex-col '>
            <span className="prodName font-black text-2xl tracking-widest transition-all">{item.title.toUpperCase()}</span>
            <small className='opacity-30 italic'>{item.brand}</small>
          </div>
          <small className=''>${item.price}</small>
                
        </div>

      </div>
    </li>
    
    </Link>
  )
}

export default ProductCard