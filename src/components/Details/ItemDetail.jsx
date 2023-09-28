import React from 'react'


const ItemDetail = ({  product }) => {

  if(!product) {
    return <div>Loading ...</div>
  }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen gap-8 p-20 text-center md:text-start'>
      <img className='w-96' src={product.image} alt="" />
      <div>
          <small className='italic opacity-40'>{ product.brand }</small>

          <div className='flex items-center gap-4 mb-4 mt-2 justify-center md:justify-start'>
          <h1 className='text-8xl font-extrabold'>{product.title}</h1>
          <h2 className='text-sm'>{product.price}</h2>

        </div>
        <p>{product.descrpition}</p>

      </div>

    </div>
  )
}

export default ItemDetail