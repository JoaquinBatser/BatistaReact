import React, { useContext, useState } from 'react'
import { toast } from 'sonner'
import CartContext from '../../context/CartContext/CartContext'

const Counter = ( {onAdd} ) => {
    const [count, setCount] = useState(1)
    const {cart} = useContext(CartContext)

    const increment = () => {
        setCount( count + 1 )
    }

    const decrement = () => {
        if ( count > 1 ) {
            setCount( count - 1 )
        }
    }
    

    
    return (
        <div className='flex items-center justify-center text-white text-sm mt-4 gap-1 font-bold'>
            <span className='bg-black px-2 py-1 rounded'> { count } </span>
            <button onClick={increment} className='bg-black rounded px-2 py-1 hover:bg-white hover:border-black hover:text-black transition-all'> + </button>
            <button onClick={decrement} className='bg-black rounded px-2 py-1 hover:bg-white hover:border-black hover:text-black transition-all'> - </button>
            <button onClick={() => {onAdd(count), toast(`${count} item/s added to your cart`)}} className='px-2 py-1 rounded bg-black w-full  hover:bg-white hover:border-black hover:text-black transition-all'>Add to cart</button>

        </div>
    )
}

export default Counter