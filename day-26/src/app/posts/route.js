import { PostData } from "./PostData";

// export async function GET(){
//     return Response.json(PostData)
// }

export async function POST(request) {
  const title = await request.json();
  const result = {
    userID: 1,
    id: PostData.length + 1,
    title: title.title,
    body: title.title,
  };
  PostData.push(result);
  return new Response(JSON.stringify(PostData), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

// single query params
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredPosts = PostData.filter((post) =>
    post.body.toLowerCase().includes(query.toLowerCase())
  );
  return Response.json(filteredPosts);
}
