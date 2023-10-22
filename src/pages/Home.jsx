import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/Items/ItemListContainer'


const Home = () => {
  const params = useParams()
  return (
    <>
      <ItemListContainer items={params} />
    </>
  )
}

export default Home