import { users } from "./data";

// Simple GET Method
// export async function GET() {
//   return Response.json(users);
// }

// // GET Method based on Query Params
// export async function GET(request) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   // here string "query" is the parameter that we are using in the URL
//   const filteredUser = query
//     ? users.filter((user) =>
//         user.userName.toLowerCase().includes(query.toLowerCase())
//       )
//     : users;
//   return Response.json(filteredUser);
// }

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
  }
  return new Response("already exists!!");
}

// Handling multiple query filters
export async function GET(request) {
  const searchParams = await request.nextUrl.searchParams;
  const queries = ["first", "second"];
  let filteredResult, finalResult;
  function filtering(filterName, filterList) {
    const filterValue = searchParams.get(filterName);
    return filterValue
      ? filterList.filter((user) =>
          user.userName.toLowerCase().includes(filterValue.toLowerCase())
        )
      : filterList;
  }
 queries.forEach((item) => {
    let first, final;
    if (queries[0] === item) {
      first = filtering(item, users);
      filteredResult = [...first];
    } else {
      final = filtering(item, filteredResult);
      finalResult=final
    }
  });
  return Response.json(finalResult);
}
