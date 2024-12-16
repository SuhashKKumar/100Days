import Link from "next/link";
import React from "react";
import BGChange from "./_components/BGChange";

const Home = () => {
//
  return (
    <div>
      Home Page!!
      <div className="flex flex-col">
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
        <Link href="/login">
          <button className="btn">Authenticate Page</button>
        </Link>
        <Link href="/cookies">
          <button className="btn">Cookies Page</button>
        </Link>
        <Link href="/toggle">
          <button className="btn">Toggle Page</button>
        </Link>
        <Link href="/order-placed">
          <button className="btn">Order Page</button>
        </Link>
        <Link href="/photo-feed">
          <button className="btn">Photo Feed Page</button>
        </Link>
        <Link href="/hello">
          <button className="btn">Hello Route</button>
        </Link>
        <Link href="/server-about">
          <button className="btn">Server About Page</button>
        </Link>
        <Link href="/client-about">
          <button className="btn">Client About Page</button>
        </Link>
        <Link href="/product-details">
          <button className="btn">Product Details Page</button>
        </Link>
        <Link href="/server-route">
          <button className="btn">Server Route</button>
        </Link>
        <Link href="/client-route">
          <button className="btn">Client Route</button>
        </Link>
      </div>
      <BGChange />
    </div>
  );
};

export default Home;
