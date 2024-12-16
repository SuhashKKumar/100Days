"use client";

import { clientSideFunction } from "../_utils/client-utils";
import { serverSideFunction } from "../_utils/server-utils";
// try to comment and uncomment server-only in the above directory

const ClientRoute = () => {
    const serverResult =serverSideFunction()
    const clientResult = clientSideFunction()
    console.log("server side function fetched in client route");
    return (
    <div>
      Client Route Page {serverResult} - {clientResult}
    </div>
  )
}

export default ClientRoute
