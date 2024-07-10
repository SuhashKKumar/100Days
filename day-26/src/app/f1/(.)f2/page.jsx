import Card from "@/app/_components/Card";
import Link from "next/link";
import React from "react";

const InterceptedF2 = () => {
  return (
    <Card>
      <div>Intercepted F2 page!!</div>
      <Link href="/" className="btn" >Home</Link>
    </Card>
  );
};

export default InterceptedF2;
