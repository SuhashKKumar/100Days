"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const MemoryTemplate = ({ children }) => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      {children}
      <h3>Template Page!!</h3>
      
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-red-500"
          placeholder="Enter your name"
        />
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default MemoryTemplate;
