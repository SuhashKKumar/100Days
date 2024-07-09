import React from "react";

const ReviewDetails = ({ params }) => {
  console.log(params);
  if (parseInt(params.reviewId) === 3) {
    throw new Error("Error loading review");
  } else {
    return (
      <div>
        Review {params.reviewId} for product {params.productId}
      </div>
    );
  }
};

export default ReviewDetails;
