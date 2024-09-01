import React from 'react'
import Rating from './Rating';
import {Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <Link to={`/product/${product._id}`} className="group">
    <div className="aspect-h-1 product-title aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img src={product.image} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
    </div>
    <h3 className="mt-4 text-sm text-gray-700 ">{product.name}</h3>
    <h3 className="mt-4 text-sm text-gray-700">{product.description}</h3>
    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
    <p className="mt- text-lg font-medium text-gray-900">{product.price}</p>
  </Link>
  )
}

export default Product
