import React from "react";

const ReviewsPage = ({ params }) => {
  return (
    <>
      <h1>Reviews of Product {params.productId}</h1>
      <h2>Review 1</h2>
      <h2>Review 2</h2>
      <h2>Review 3</h2>
    </>
  );
};

export default ReviewsPage;
