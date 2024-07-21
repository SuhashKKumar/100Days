import { users } from "./data";

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const user = await request.json();
  const exists = users.some((item) => item.userName === user.userName);
  let newUser;
  if (!exists) {
    newUser = {
      id: users.length + 1,
      userName: user.userName,
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser));
  } return new Response("already exists!!");
}
