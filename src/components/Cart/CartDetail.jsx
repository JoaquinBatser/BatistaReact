import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { Toaster, toast } from 'sonner'


const CartDetail = () => {
    const [orderId, setOrderId] = useState()
    const { cart, removeItem, clear } = useContext(CartContext)
    console.log(cart)
    
    
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
 
        console.log(purchase)
            
        clear()
            

    }
    console.log(cart)

    return (
        <div className='w-screen flex min-h-screen flex-col justify-center items-center gap-2 pt-8'>
            {
                cart.map( el => (
                    <div className='flex gap-8 items-center' key={el.item.id}>
                       <img className='h-20' src={el.item.image} alt="" />
                       <div className='flex flex-col'>
                            <strong>{el.item.title}</strong>
                            <small className='italic opacity-40'>{el.item.brand}</small>

                       </div>
                        <small>Quantity: {el.quantity}</small>
                        <strong>${el.item.price}</strong>
                        <button onClick={() => removeItem(el.item.id)}>delete from cart</button>
                    </div>
                ))
            }
            {
                cart.length > 0 &&
                <button onClick={addToCart}> Create order </button>
            }
            

        </div>
    ) 
}

export default CartDetail