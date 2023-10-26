import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import {  toast } from 'sonner'
import deleteFromCart from '../../images/deleteFromCart.svg'
import Counter from '../Details/Counter'
import { useNavigate } from 'react-router-dom'



const CartDetail = () => {
    const [orderId, setOrderId] = useState()
    const { cart, removeItem, clear, subTotal, deliveryFee, tax,total } = useContext(CartContext)
    

    const navigate = useNavigate()

    const navigateToCartForm = () => {
        navigate('/cartform')
    }

    const navigateToItem = (id) => {
        navigate(`/detail/${id}`)
    }
    


    return (
        <div className=' flex min-h-screen flex-col justify-center items-center md:gap-2 gap-10 text-[#fefefe] py-32 sm:py-10'>
            {
                cart.map( el => (
                    <div className='grid gap-3 md:gap-8 md:grid-cols-5 items-center justify-items-center' key={el.id}>
                    
                        <button onClick={() => navigateToItem(el.item.id)}>
                            <img  className='h-36' src={el.item.image} alt="" />

                        </button>
                       <div className='flex flex-col'>
                            <strong className='hover:cursor-pointer' onClick={() => navigateToItem(el.item.id)}>{el.item.title}</strong>
                            <small className='italic opacity-40'>{el.item.brand}</small>

                       </div>
                       <div>
                         <small className='text-white'>Quantity: {el.quantity}</small>

                       </div>
                       
                        <strong>${el.quantity*el.item.price}</strong>
                        <button onClick={() => removeItem(el.item.id)}> <img className='w-6' src={deleteFromCart} alt="" />delete</button>
                    </div>
                ))
            }
            
            {
                cart.length > 0 &&
                <div className='grid gap-3 md:gap-4 md:grid-cols-4 mt-8 place-items-center '>
                    <p className=''>Tax: ${subTotal*tax}</p>
                    <p className=''>Delivery Fee: ${subTotal* deliveryFee}</p>
                    <p className=''>Subtotal: ${subTotal}</p>
                    <p className='bg-white px-2  text-black font-semibold'>TotalPrice: ${total}</p>
            
                </div>
            }
            {
                cart.length > 0 &&
                
                <button onClick={navigateToCartForm} className='bg-white mt-4 px-2 py-1 rounded text-black font-bold ' > CHECKOUT </button>
            }
            {
                cart.length == 0 &&
                <div className=' font-black text-8xl'>EMPTY CART</div>
            }
            

        </div>
    ) 
}

export default CartDetail