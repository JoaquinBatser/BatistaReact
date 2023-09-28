import React from 'react'
import { Products } from '../components/Items/ItemListContainer'
import { products } from '../mocks/products.json'

const Home = () => {
  return (
    <>
      <Products products={products} />
    </>
  )
}

export default Home