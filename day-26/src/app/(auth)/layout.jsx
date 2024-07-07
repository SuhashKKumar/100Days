"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./styles.css";

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const auth = [
    {
      id: 1,
      name: "login",
      href: "/login",
    },
    {
      id: 2,
      name: "register",
      href: "/register",
    },
    {
      id: 3,
      name: "forget-password",
      href: "/forget-password",
    },
  ];
  return (
    <div>
      {auth.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            className={
              isActive ? "font-bold p-3 underline " : "text-blue-500 p-3"
            }
            href={item.href}
            key={item.id}
          >
            {item.name}
          </Link>
        );
      })}
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
