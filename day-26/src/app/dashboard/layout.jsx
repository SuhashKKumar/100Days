"use client";

import Link from "next/link";
import React, { useState } from "react";

const DashboardLayout = ({
  children,
  login,
  users,
  revenue,
  notifications,
}) => {
  const [userLogin, setUserLogin] = useState(false);
  const loginHandler = () => {
    setUserLogin(!userLogin);
  };
  return (
    <>
      {userLogin ? (
        <>
          <div>{children}</div>
          <div className="flex my-6 gap-2 text-xs items-center text-center mx-3">
            <div className="flex flex-col gap-3">
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div>{notifications}</div>
          </div>
          <Link href="/" className="btn">
            Home
          </Link>
        </>
      ) : (
        login
      )}
      <button className="btn" onClick={loginHandler}>
        Login Toggle
      </button>
    </>
  );
};

export default DashboardLayout;
