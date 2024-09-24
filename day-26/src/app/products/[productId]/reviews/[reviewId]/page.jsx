import React from "react";

const ReviewDetails = ({ params }) => {
  console.log(params);
  if (parseInt(params.reviewId) > 30) {
    throw new Error("Error loading review");
  } else if (parseInt(params.productId)>500){
    throw new Error("We don't have that product")
  }else {
    return (
      <div>
        Review {params.reviewId} for product {params.productId}
      </div>
    );
  }
};

export default ReviewDetails;
