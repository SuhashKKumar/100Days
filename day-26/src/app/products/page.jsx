import Link from "next/link";
import React from "react";

const ProductsList = () => {
  const Id =100
  return (
    <>
      <h1>Products List</h1>
      <h2><Link href="/products/1" >Product 1</Link></h2>
      <h2><Link href="/products/2" >Product 2</Link></h2>
      <h2><Link href="/products/3" >Product 3</Link></h2>
      <h2><Link href={`/products/${Id}`} >Product {Id}</Link></h2>
    </>
  );
};

export default ProductsList;
