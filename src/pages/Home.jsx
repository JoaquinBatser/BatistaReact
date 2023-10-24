import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/Items/ItemListContainer'
import Hero from '../components/Hero'


const Home = () => {
  const params = useParams()
  return (
    <>
      <Hero />
      <ItemListContainer items={params} />
    </>
  )
}

export default Home