import React from 'react'
import fruits from '../assets/fruits.png'
import Product from '../components/Product'
import products from '../products'


function Home() {
  const prod = products;
  console.log(prod);
  return (
    <>
        <header className='flex flex-col w-full min-h-screen overflow-hidden '><img id="fruit" src={fruits}/>
        <h1 className='text-3xl text-center font-semibold text-black my-7'>Latest Products</h1>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map(product => ( 
             <Product key={product._id}  product={product}/>
             ))}
             
            </div>
          </div>
        </div>

        </header>
     

    
    </>
  )
}

export default Home
