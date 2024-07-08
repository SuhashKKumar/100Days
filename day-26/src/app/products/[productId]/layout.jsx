"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


const layout = ({ children }) => {
  const router = useRouter();
  const clickHandler=()=>{
    console.log("clicked");
    router.back()
  }
  return (
    <>
      {children}
        <button onClick={clickHandler} >Back to Products</button>
    </>
  );
};

export default layout;
