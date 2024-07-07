import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      {children}
      <Link href="/products">
        <button>Back to Products</button>
      </Link>
    </>
  );
};

export default layout;
