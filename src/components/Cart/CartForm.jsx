import React, { useContext } from 'react'
import CartContext from '../../context/CartContext/CartContext'


const CartForm = () => {
    // const { cart, removeItem, clear } = useContext(CartContext)

    const { cart } = useContext(CartContext)
    console.log(cart)
  return (
    <div>CartForm</div>
  )
}

export default CartForm