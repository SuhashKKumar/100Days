import { notFound } from "next/navigation";
import React from "react";

export const metadata ={
  title:"products"
}

const ProductDetails = ({ params }) => {
  console.log(params,'params from productId')
  if (parseInt(params.productId) > 500) return notFound();
  return <h1>ProductDetails of {params.productId} Page!!</h1>;
};

export default ProductDetails;
