"use client";
import Card from "@/app/_components/Card";
import { useRouter } from "next/navigation";
import React from "react";

const Notifications = () => {
  const router = useRouter();
  const archiveHandler = () => {
    router.push("/dashboard/archived");
  };

  return (
    <Card>
      Notifications Page!!
      <button onClick={archiveHandler} className="btn">
        Archived
      </button>
    </Card>
  );
};

export default Notifications;
