import { profiles } from "../data";

export async function GET(request, { params }) {
  const result = profiles.filter(
    (profile) => profile.id === parseInt(params.id)
  );
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const responseProfile = await request.json();
  const index = profiles.findIndex((item) => item.id === parseInt(params.id));
  console.log(params.id, "index", index);
  profiles[index].region = await responseProfile.region;
  return Response.json(profiles[index]);
}


