"use client";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";
const layout = ({ children }) => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      {children}
      <h3>Storage Packet</h3>
      <div>
        <button onClick={() => router.push("/cookies")}>Cookies</button>
        <button onClick={() => router.push("/local-storage")}>
          local-storage
        </button>
        <button onClick={() => router.push("/session-storage")}>
          session-storage
        </button>
      </div>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
        />
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default layout;
