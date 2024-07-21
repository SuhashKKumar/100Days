import { users } from "../data";

export function GET(request, { params }) {
  const result = users.filter((user) => user.id === parseInt(params.id));
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = users.findIndex((user) => user.id === parseInt(params.id));
  users[index].userName = await body.userName;
  return Response.json(users[index]);
}
