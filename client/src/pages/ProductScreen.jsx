import React from 'react'
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
    const { id : productId } = useParams();
    const product = products.find((p)=>p._id===productId);
    console.log(product);
  return (
    <div className="min-h-screen p-4">
      <Link className="btn btn-outline btn-primary">Go Back</Link>
    </div>
  )
}

export default ProductScreen
