"use client"
import React from 'react';
import { useRouter } from "next/navigation";


const First = () => {
  const router = useRouter()
  const clickHandler =()=>{
    router.back()
  }
  return (
    <div>
    <h1>
    First Blog Page!!
    </h1>
    <button onClick={clickHandler} >Back to Blogs Page!!</button>
    </div>
  )
}

export default First
