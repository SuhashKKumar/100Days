import { users } from "../data";

export  function GET(request, { params }) {
  const result =  users.filter((user) => user.id === parseInt(params.id));
  return Response.json(result)
}
