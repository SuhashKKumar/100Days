import React from "react";

const Docs = ({ params }) => {
  if (params.slug?.length > 1) {
    let temp = ``;
    temp = params.slug.map((item) => `${temp} of ${item}`);
    return <h1>You are viewing Docs {temp}</h1>;
  } else return <h1>Docs Home Page!!</h1>;
};

export default Docs;
