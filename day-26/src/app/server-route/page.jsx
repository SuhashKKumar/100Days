import { clientSideFunction } from "../_utils/client-utils";
import { serverSideFunction } from "../_utils/server-utils";

const ServerRoute = () => {
  const serverResult = serverSideFunction();
  const clientResult = clientSideFunction()
  console.log("server side function fetched in server route");
  return (
    <div>
      Server Route Page
      {serverResult} - {clientResult}
    </div>
  );
};

export default ServerRoute;
