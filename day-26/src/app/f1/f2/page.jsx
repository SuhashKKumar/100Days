import Card from "@/app/_components/Card";
import Link from "next/link";
import React from "react";

const F2 = () => {
  return (
    <Card>
      <div>F2 page!!</div>
      <Link href="/" className="btn" >Home</Link>
    </Card>
  );
};

export default F2;
