import React, { useContext } from 'react'
import CartContext from '../../context/CartContext/CartContext'


const CartForm = () => {
    // const { cart, removeItem, clear } = useContext(CartContext)

    const { cart } = useContext(CartContext)
    
  return (
    <div className='grid grid-cols-2 items-center min-h-screen text-white'>

      <div className='flex justify-center flex-col items-center'>
        <h2>Personal information</h2>
        <form className='' action="">
          <div>
            <div>
              <input type="text" placeholder='name' />
            </div>
            <div>
              <input type="email" placeholder='email' />
            </div>
          </div>
          <div>
            <input type="number" placeholder='phone' />
          </div>
        </form>
      </div>

      <div className='flex justify-center flex-col items-center'>
        <h2>Your order</h2>
        {
          cart.map( el => {
            <p>{el.item.title}</p>
            
          })
        }
      </div>

    </div>
  )
}

export default CartForm