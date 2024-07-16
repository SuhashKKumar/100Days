"use client";
import React from 'react'
import { useRouter } from "next/navigation";


const Button = () => {
  const router = useRouter()
  return (
    <button className="btn" onClick={() => router.push("/")}>Home</button>
  )
}

export default Button
