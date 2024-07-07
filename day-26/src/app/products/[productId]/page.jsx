import { notFound } from "next/navigation";
import React from "react";

const ProductDetails = ({ params }) => {
  if (params.productId > 5) return notFound();
  return <h1>ProductDetails of {params.productId} Page!!</h1>;
};

export default ProductDetails;
