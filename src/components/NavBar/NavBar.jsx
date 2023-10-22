import React from 'react'
import Logo from '../../images/logo.png'
import CartWidget from './CartWidget'
import QMark from '../../images/about.svg'
import { Link, NavLink, useParams } from 'react-router-dom'


const NavBar = () => {
  const { category } = useParams()
  const brands = ['UrbanEdge', 'AeroGlide', 'SwiftSole', 'ZenPath'];
  
  return (
    <nav className='fixed z-40 px-4 group flex items-center w-screen justify-between'>
      <Link onClick={() => brandSwitch()} to='/'><img className='w-16 h-16 rotate-[20deg] hover:cursor-pointer' src={Logo} alt="Logo" /></Link>
      <ul className='gap-1 ml-2 flex text-sm font-bold tracking-wider text-white'>

          {brands.map((brandName) => (
            <NavLink onClick={() => brandSwitch()} key={brandName} to={`/brand/${brandName}`}>
              <li className='hover:bg-black cursor-pointer bg-black/40 px-2 lg:px-6 py-1 rounded transition-all'>
                {brandName}
              </li>
            </NavLink>
          ))}

      </ul>
      <div className='flex items-center'>
        <Link to='/about' ><img className='w-6' src={QMark} alt="About" /></Link>
        <CartWidget />
      </div>
      

    </nav>
  )
}

export default NavBar