import React from 'react'
import Counter from './Counter'


const ItemDetail = ({ item, onAdd }) => {

  if(!item) {
    return <div className='flex w-screen h-screen justify-center items-center font-black text-6xl'>LOADING ...</div>
  }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen gap-8 p-20 text-center md:text-start'>
      <img className='w-96' src={item.image} alt="" />
      <div>
          <small className='italic opacity-40'>{ item.brand }</small>

          <div className='flex items-center gap-4 mb-4 mt-2 justify-center md:justify-start'>
          <h1 className='text-8xl font-extrabold'>{item.title}</h1>
          <h2 className='text-sm'>{item.price}</h2>

        </div>
        <p>{item.description}</p>
        <Counter onAdd={ onAdd }/>

      </div>

    </div>
  )
}

export default ItemDetail