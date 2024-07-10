"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderPlaced = () => {
  const router = useRouter();
  const orderHandler = () => {
    console.log("your order is being placed!!!");
    router.push("/");
  };
  return (
    <>
      <h1>Order product</h1>
      <button className="btn" onClick={orderHandler}>Place Order</button>
    </>
  );
};

export default OrderPlaced;
