import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
    const {orderId} = useParams()
  return (
    <div>
        Thanks for buying {orderId}
    </div>
  )
}

export default Checkout