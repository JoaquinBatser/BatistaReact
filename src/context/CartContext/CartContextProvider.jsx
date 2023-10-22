import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, q) => {
        const elPrev = isInCart(item.id)

        if (elPrev) {
            const newCart = cart.map(el => {
                if(el.id === elPrev.id) {
                    el.quantity = el.quantity + q;
                    return el
                        
                    
                }
                return el
            })
            setCart(newCart)
        } else {

            setCart([
                ...cart,
                {
                    item, quantity: q
                }
            ])
        }
        
    }

    const isInCart = (id) => {
        const element = cart.find((el) => el.item.id === id)
        return element
    }

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
        clear
    }

    return (
        <CartContext.Provider value={ values }>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider