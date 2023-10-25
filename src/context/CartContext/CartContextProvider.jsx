import React, { useState } from 'react'
import CartContext from './CartContext'
import ItemCounter from '../../components/Cart/ItemCounter'

const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])    
    
    const addItem = (item, q) => {
        const elPrev = isInCart(item.id)

        console.log(cart)

        if (elPrev){
            const newCart = cart.map (el => {
                
                if (el.item.id === item.id) {
                    el.quantity = el.quantity + q
                    return el
                }
                return el
            })
            setCart(newCart)
        } else {
            setCart
            ([
                ...cart,
                {
                    item,
                    quantity: q

                }
            ])
        }  
    }

    const isInCart = (id) => {
       return cart.find(el => el.item.id === id)
        
    }
  
    const total = cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0);

    

    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.item.id !== id);
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        total
    }

    return (
        <CartContext.Provider value={ values }>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider