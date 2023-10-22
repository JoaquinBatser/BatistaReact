import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink, useParams } from 'react-router-dom'


const NavBar = () => {
  const { category } = useParams()
  const brands = ['UrbanEdge', 'AeroGlide', 'SwiftSole', 'ZenPath'];
  
  return (
    <nav className= ' fixed z-40 px-14 group flex items-center w-screen sm:justify-between sm:h-10 sm:flex-row  gap-1    h-20 flex-col py-4'>
      <Link to='/' className=' font-bold tracking-widest text-[#fefefe]'>EVOKE</Link>
      <ul className='gap-0 flex text-sm font-bold tracking-wider text-[#fefefe] divide-x-2'>

          {brands.map((brandName) => (
            <NavLink key={brandName} to={`/brand/${brandName}`}>
              <li className='cursor-pointer px-2 lg:px-6 py-1 transition-all'>
                {brandName}
              </li>
            </NavLink>
          ))}

      </ul>
      <div className='flex items-center'>
        <CartWidget />
      </div>
      

    </nav>
  )
}

export default NavBar