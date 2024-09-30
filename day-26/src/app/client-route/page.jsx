"use client";

import { serverSideFunction } from "../_utils/server-utils";
// try to comment and uncomment server-only in the above directory

const ClientRoute = () => {
    const result = serverSideFunction()
    console.log("server side function fetched in client route");
    return (
    <div>
      Client Route Page {result}
    </div>
  )
}

export default ClientRoute
