import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import {  toast } from 'sonner'
import deleteFromCart from '../../images/deleteFromCart.svg'
import Counter from '../Details/Counter'
import { useNavigate } from 'react-router-dom'


const CartDetail = () => {
    const [orderId, setOrderId] = useState()
    const { cart, removeItem, clear } = useContext(CartContext)

    const navigate = useNavigate()

    const navigateToCartForm = () => {
        navigate('/cartform')
    }

    
    
    const addToCart = () => {
        const purchase = {
            buyer: {
                id:1,
                name: 'Juasan'
            },
            date: new Date(),
            items: cart,
        };
        const db = getFirestore()
        const orderCollection = collection(db, "orders")

      
        addDoc(orderCollection, purchase)
        .then(res => setOrderId(res.id))
        .catch(err => console.log(err))
        // const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));
        // toast.promise(promise, {
        //             loading: 'Loading...',
        //             success: (res) => {
                         
        //                 return `Purchase sucesful ${orderId}`;
                        
                    
        //             },
        //             error: 'Error',
                    
        //         });
                clear()
            
        
            

    }


    return (
        <div className='w-screen flex min-h-screen flex-col justify-center items-center md:gap-2 gap-10 text-[#fefefe] py-32 sm:py-10'>
            {
                cart.map( el => (
                    <div className='grid gap-3 md:gap-8 md:grid-cols-5 items-center justify-items-center' key={el.item.id}>
                       <img className='h-36' src={el.item.image} alt="" />
                       <div className='flex flex-col'>
                            <strong>{el.item.title}</strong>
                            <small className='italic opacity-40'>{el.item.brand}</small>

                       </div>
                        <small>Quantity: {el.quantity}</small>
                       
                        <strong>${(el.item.price)*el.quantity}</strong>
                        <button onClick={() => removeItem(el.item.id)}> <img className='w-6' src={deleteFromCart} alt="" /></button>
                    </div>
                ))
            }
            {
                cart.length > 0 &&
                <button onClick={navigateToCartForm} className='bg-white px-2 py-1 rounded text-black font-bold ' > Create order </button>
            }
            {
                cart.length == 0 &&
                <div className=' font-black text-8xl'>EMPTY CART</div>
            }
            

        </div>
    ) 
}

export default CartDetail