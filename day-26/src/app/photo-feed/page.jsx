import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/app/_components/Card";
import wondersImages from "../_lib/wonders";

const PhotoFeedPage = () => {

  return (
    <div>
      <h1>New Wonders of the World</h1>
      {wondersImages.map(({id,src}) => (
        <Link className="my-7" key={id} href={`/photo-feed/${id}`}>
          <Card>
          <Image
          alt="images list"
          width={100}
          height={100}
          src={src}
          />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default PhotoFeedPage;
