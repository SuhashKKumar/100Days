import React from "react";
import Image from "next/image";

const PhotoDetails = ({ params }) => {
  const photoId = parseInt(params.photoId);
  console.log(photoId,'params')
  return (
    <>
     
      <h2>This is {photoId} image</h2>
    </>
  );
};

export default PhotoDetails;
