import React, { useContext } from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink, useParams } from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext'


const NavBar = () => {
  const { category } = useParams()
  const brands = ['UrbanEdge', 'AeroGlide', 'SwiftSole', 'ZenPath'];
  const {cart, totalItems} = useContext(CartContext)

  // const total = cart.reduce((amount, item) => { return amount + item.quantity}, 0)
  
  return (
    <nav className= 'bg-black/40 fixed z-40 px-14 group flex items-center w-screen sm:justify-between sm:h-10 sm:flex-row  gap-1    h-32 flex-col '>
      <Link to='/' className=' font-black tracking-widest text-[#fefefe]'>EVOKE</Link>
      <ul className='gap-0 flex text-sm font-semibold tracking-wider text-[#fefefe] divide-x-2'>

          {brands.map((brandName) => (
            <NavLink key={brandName} to={`/brand/${brandName}`}>
              <li className='cursor-pointer px-2 lg:px-6 py-1 transition-all'>
                {brandName}
              </li>
            </NavLink>
          ))}

      </ul>
      <div className='flex items-center'>
        
        <CartWidget total={totalItems}/>
      </div>
      

    </nav>
  )
}

export default NavBar