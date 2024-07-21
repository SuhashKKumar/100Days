import { comments } from "../data";

export async function GET(request, { params }) {
  const result = comments.filter((item) => item.id === parseInt(params.id));
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = await body.text;
  return Response.json(comments[index]);
}

export async function DELETE(request,{params}){
  const index = comments.findIndex(comment=>comment.id === parseInt(params.id))
  comments.splice(index,1)
  return Response.json(comments)
}