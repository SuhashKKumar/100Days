import { users } from "../data";

export async function GET(request, { params }) {
  const result = users.filter((user) => user.id === parseInt(params.id));
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = users.findIndex((user) => user.id === parseInt(params.id));
  users[index].userName = await body.userName;
  return Response.json(users[index]);
}

export async function DELETE(_, { params }) {
  const index = users.findIndex((user) => user.id === parseInt(params.id));
  const deletedUser = users[index];
  users.splice(index, 1);
  return Response.json(deletedUser);
}
