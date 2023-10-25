import React from 'react'
import shoppingCart from '../../images/shoppingcart.svg'
import { NavLink } from 'react-router-dom'

const CartWidget = ({total}) => {

  return (
    <NavLink to='/cart'>
        <div className='hover:cursor-pointer transition ease-in-out duration-300 py-1 px-2 flex items-center '> 
            <span className='text-center pr-2 text-xs text-[#fefefe]'>{total}</span>
            <img className='w-5' src={shoppingCart} alt="" />
        </div>
    </NavLink>
  )
}

export default CartWidget