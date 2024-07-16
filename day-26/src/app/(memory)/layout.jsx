"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const MemoryLayout = ({ children }) => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
    <h3>Layout Page!!</h3>
    <div>
    <button className="btn" onClick={() => router.push("/cookies")}>Cookies</button>
    <button className="btn" onClick={() => router.push("/local-storage")}>
    local-storage
    </button>
    <button className="btn" onClick={() => router.push("/session-storage")}>
    session-storage
    </button>
    </div>
    <div>
    <input
    onChange={(e) => setName(e.target.value)}
    value={name}
    className="border border-red-500"
    placeholder="Enter your name"
    />
    <h1>{name}</h1>
    </div>
    <hr/>
    {children}
    </>
  );
};

export default MemoryLayout;
