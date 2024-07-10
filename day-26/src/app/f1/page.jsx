import Link from "next/link";
import React from "react";
import Card from "../_components/Card";

const F1 = () => {
  return (
    <Card>
      <div>F1 page!!</div>
      <Link className="btn" href="/f1/f2">Go to F2</Link>
    </Card>
  );
};

export default F1;
