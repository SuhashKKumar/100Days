import { comments } from "./data";

// export async function GET() {
//   return Response.json(comments);
// }

// // single query parameter handler
// export async function GET(request) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   const filteredComment = query
//     ? comments.filter((comment) =>
//         comment.text.toLowerCase().includes(query.toLowerCase())
//       )
//     : comments;
//     return Response.json(filteredComment)
// }

// multiple query parameters handler
export async function GET(request) {
  const searchParams = await request.nextUrl.searchParams;
  const queryParams = ["first", "second"];
  let filterResult = [];
  const filtering = (item, filterList) => {
    return item
      ? filterList.filter((comment) =>
          comment.text.toLowerCase().includes(item.toLowerCase())
        )
      : filterList;
  };
  queryParams.forEach((queryItem) => {
    const query = searchParams.get(queryItem);
    if (queryParams[0] === query) filterResult = filtering(query, comments);
    else filterResult = filtering(query, filterResult);
  });
  return Response.json(filterResult);
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

