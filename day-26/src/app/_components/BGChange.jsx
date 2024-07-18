"use client"
import React, { useState } from "react";

const BGChange = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      onClick={() => setToggle(!toggle)}
      className={`px-4 py-1 rounded text-white ${toggle ? "bg-red-500" : "bg-blue-500"}`}
    >
      Toggle Button
    </button>
  );
};

export default BGChange;
