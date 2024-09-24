import React from "react";
import Image from "next/image";

const InterceptedPhotoDetails = ({ params }) => {
  const photoId = parseInt(params.photoId);
  console.log(photoId,'params')
  return (
    <>
     
      <h2>This is {photoId} image Intercepted</h2>
    </>
  );
};

export default InterceptedPhotoDetails;
