"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname,'pathname')
  const navLinks = [
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
      {navLinks.map((item) => {
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
      <h1>{pathname}</h1>
    </div>
  );
};

export default AuthLayout;
