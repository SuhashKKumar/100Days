import React, { Suspense } from 'react'
import Products from '../_components/products'
import Reviews from '../_components/Reviews'

const ProductDetails = () => {
  return (
    <div>
        <Suspense fallback={<h1>Loading Products Page...</h1>} >
      <Products/>
        </Suspense>
        <Suspense fallback={<h1>Loading Products Page...</h1>} >
      <Reviews/>
        </Suspense>
    </div>
  )
}

export default ProductDetails
