import React from "react";
import Link from "next/link";

const Profile = () => {
  return (
    <>
      <h1>Profile Page!!</h1>
      <Link href="/profile/api" className="btn">
        Profile API
      </Link>
    </>
  );
};

export default Profile;
