import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../../mocks/products.json'
import BrandProductList from './BrandProductList'

const BrandPage = () => {
  const { brandName } = useParams()

  const products = productsData.products

  const filteredProducts = products.filter((product) => product.brand === brandName)

  return (
   <BrandProductList products={ filteredProducts } />
  )
}

export default BrandPage