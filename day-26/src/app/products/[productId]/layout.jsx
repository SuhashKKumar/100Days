"use client";
import { useRouter } from "next/navigation";
import React from "react";


const layout = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const clickHandler=()=>{
    console.log("clicked");
    router.back()
  }
  return (
    <div>
    <button className="btn" onClick={clickHandler} >Back to Products</button>
    {children}
    </div>
  );
};

export default layout;
