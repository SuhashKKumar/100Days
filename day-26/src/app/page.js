import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      Home Page!!
      <div>
        <Link href="/blog">
          <button className="btn">Blog Page</button>
        </Link>
        <Link href="/dashboard">
          <button className="btn">Dashboard Page</button>
        </Link>
        <Link href="/products">
          <button className="btn">Products Page</button>
        </Link>
        <Link href="/f1">
          <button className="btn">F1 Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
