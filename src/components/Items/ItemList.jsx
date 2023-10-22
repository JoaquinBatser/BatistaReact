import React from 'react'
import ProductCard from './ProductCard'

const ItemList = ({ items }) => {
  return (
    <>
        {
            items.map(( item ) => (
                <ProductCard key={item.id} item={ item }/>
            ))
            
        }

    </>

    
  )
}

export default ItemList