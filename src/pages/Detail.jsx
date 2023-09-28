import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/Details/ItemDetailContainer'

const Detail = () => {
    const { id } = useParams() 

    return (
        <>
            <ItemDetailContainer id={ id }/>
        </>
  )
}

export default Detail