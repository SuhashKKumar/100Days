import { serverSideFunction } from "../_utils/server-utils";

const ServerRoute = () => {
  const result = serverSideFunction();
  console.log("server side function fetched in server route");
  return (
    <div>
      Server Route Page
      {result}
    </div>
  );
};

export default ServerRoute;
