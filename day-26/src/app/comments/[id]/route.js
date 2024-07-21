import { comments } from "../data";

export async function GET(request, { params }) {
  const result = comments.filter((item) => item.id === parseInt(params.id));
  return Response.json(result);
}
