import Card from "@/app/_components/Card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <Card>
      Archived Notifications Page!!
      <Link href="/dashboard" className="btn block">
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
