"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page";
import Users from "./@users/page";
import "./styles.css";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const homeHandler = () => {
    router.push("/");
  };
  return (
    <>
      <div>{children}</div>
      <div className="flex my-6 gap-2 text-xs items-center text-center mx-3">
        <div className="flex flex-col gap-3">
          <Revenue />
          <Users />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
      <button className="btn" onClick={homeHandler}>
        Home
      </button>
    </>
  );
};

export default DashboardLayout;
