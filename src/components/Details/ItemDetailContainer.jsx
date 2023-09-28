import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import productsData from '../../mocks/products.json'

const ItemDetailContainer = ({ id }) => {

    const [ product, setProduct ] = useState(null)
    
    useEffect(() => {

        if (!productsData || !productsData.products) {
            console.warn('No products data available yet.');
            return;
        }

        const numericId = parseInt(id, 10)

        const products = productsData.products

        const selectedProduct = products.find((product) => product.id === numericId)
    
        setProduct(selectedProduct)
    },[id])


  return (
    <>
        <ItemDetail product={ product }/>
    </>
  )
}

export default ItemDetailContainer