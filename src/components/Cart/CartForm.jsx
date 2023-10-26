import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import { useNavigate } from 'react-router-dom'
import deleteFromCart from '../../images/deleteFromCart.svg'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'sonner'


const CartForm = () => {
  const [orderId, setOrderId] = useState()

    const { cart, removeItem, subTotal, total, deliveryFee, tax,clear } = useContext(CartContext)
    
    const navigate = useNavigate()
    const navigateToHome = () => {
      navigate('/')
    }

    const [buyer, setBuyer] = useState({
      name:"",
      email:"",
      address: ""
    })

    const [errors, setErrors] = useState({
      name:"",
      email:"",
      address: ""
    })
  


    const addToCart = () => {

      const purchase = {
        buyer,
        items:cart,
        date: new Date(),
        total
      }

      
     
      
        const db = getFirestore()
        const orderCollection = collection(db, "orders")

       

        addDoc(orderCollection, purchase)
          .then(res => {
          
            toast(
              <div>
                <p className=' font-semibold'>Your order was successful</p>
                <small>ProductId: {res.id}</small>
              </div>
            )
          })
          .then(clear())
          .catch(err => console.log(err))

          
        
          
        
          
          

    }
  
    const handleChange = (e) => {
      const { target } = e
      setBuyer({
        ...buyer,
        [target.name] : target.value
      })
      console.log(buyer)
    }

    const onSubmit = (e) => {
      e.preventDefault()

      const errors = {}

      if(!buyer.name) {
        errors.name = 'Name is required'
      }
      if(!buyer.email) {
        errors.email = 'Email is required'
      }
      if(!buyer.address) {
        errors.address = 'Address is required'
      }

      if(Object.keys(errors).length === 0) {
        addToCart()
      } else {
        setErrors(errors)
      }
    }
    
  return (
    <div className='grid grid-cols-2 items-center min-h-screen text-[#fefefe]'>

      <div className='flex justify-center flex-col items-center'>
        <h2 className='font-bold text-2xl mb-4'>PERSONAL INFORMATION</h2>
        <form className='' action="">
          <div>
            <div className='flex flex-col mb-3'>
              <div>
                <label className='mb-1' htmlFor="name"> Your name</label>
                {errors.name && <span className='ml-4 absolute text-sm italic text-red-300 mt-[2px]'> { errors.name }</span>}
              </div>
              <input onChange={handleChange} className='px-4 py-1 rounded-sm text-black' type="text" name='name' id='name' placeholder='John Doe' value={buyer.name} />
            </div>
            <div className='flex flex-col mb-3'>
              <div>
                <label className='mb-1' htmlFor="email"> Your email</label>
                {errors.email && <span className='ml-4 absolute text-sm italic text-red-300 mt-[2px]'> { errors.email }</span>}
              </div>
              <input onChange={handleChange} className='px-4 py-1 rounded-sm text-black' type="email" name='email' id='email' placeholder='johndoe@gmail.com' value={buyer.email} />
            </div>
            <div className='flex flex-col'>
              <div>
                <label className='mb-1' htmlFor="address"> Your address</label>
                {errors.address && <span className='ml-4 absolute text-sm italic text-red-300 mt-[2px]'> { errors.address }</span>}
              </div>
              <input onChange={handleChange} className='px-4 py-1 rounded-sm text-black' type="text" name='address' id='address' placeholder='CA 95134 San Jose' value={buyer.address} />
            </div>

          </div>
        </form>
        <button onClick={onSubmit} className='bg-white text-black font-black px-4 py-1 mt-5 rounded'>BUY</button>
      </div>

      <div className='flex  flex-col text-[#fefefe]'>
        <h2 className='text-2xl font-bold mb-4'>ORDER</h2>
        <div className='flex flex-col gap-2'>
          {
            cart.map ( el => (
              <div className='grid grid-cols-2'>
                <div className='flex'>
                  <img className='h-24' src={el.item.image} alt="" />
                  <div className='flex flex-col justify-center ml-6'>
                    <p className='text-xl'>{el.item.title}</p>
                    <p className='mt-2 font-bold'>${el.item.price * el.quantity}</p>
                    <p className='opacity-60 text-sm'>Quantity: {el.quantity}</p>
                  </div>

                </div>
                <button onClick={() => removeItem(el.item.id)}> <img className='w-6 text-white' src={deleteFromCart} alt="" />Delete</button>

              </div>
            ))
            
          }
        </div>

        <div className='mt-5'>
          <p className='text-lg font-semibold'>Subtotal: ${subTotal}</p>
          <p className='opacity-60 text-sm'>Delivery Fee: ${subTotal* deliveryFee}</p>
          <p className='opacity-60 text-sm'>Tax: ${subTotal*tax}</p>
          <p className='text-xl font-bold mt-4'>Total: ${total}</p>
          <p></p>
        </div>
      
          {
            cart.length === 0 && 
            navigateToHome()
          }
      </div>

    </div>
  )
}

export default CartForm