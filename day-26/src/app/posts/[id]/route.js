import { PostData } from "../PostData";

export async function GET(_request, { params }) {
  const result = PostData.find((post) => post.id === parseInt(params.id));
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const changeRequest = await request.json();
  const index = PostData.findIndex((post) => post.id === parseInt(params.id));
  const keys = Object.keys(changeRequest)[0];
  PostData[index][keys] = changeRequest[keys];
  return Response.json(PostData);
}

export async function DELETE(_request, { params }) {
  const index = PostData.findIndex((post) => post.id === parseInt(params.id));
   PostData.splice(index,1)
  return Response.json(PostData)
}
