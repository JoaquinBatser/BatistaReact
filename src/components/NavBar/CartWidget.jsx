import React from 'react'
import shoppingCart from '../../images/shoppingcart.svg'

const CartWidget = () => {
  return (
    <div>
        <div className='hover:cursor-pointer transition ease-in-out duration-300 py-1 px-2'> 
            <span className='absolute bg-red-500 rounded-full w-4 text-center text-xs text-white ml-3.5 mt-3.5'>1</span>
            <img className='w-6' src={shoppingCart} alt="" />
        </div>
    </div>
  )
}

export default CartWidget