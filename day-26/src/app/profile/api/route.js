import { cookies, headers } from "next/headers";
import { profiles } from "./data";

// to disable auto caching
// export const dynamic ="force-dynamic"

export async function GET(request) {
  // first method for getting headers
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  // second method for getting headers
  const headersList = headers();
  console.log(headersList.get("Authorization"), "second");

  // getting cookie value, first approach
  const theme = request.cookies.get("theme");
  console.log(theme, "cookies theme");

  //   set and get cookie value using nextjs built-in function, second approach
  cookies().set("resultsPerPage", 200);
  const resultsPerPageCookie = cookies().get("resultsPerPage");
  console.log(resultsPerPageCookie, "results");

  return new Response(<h1>Profile Page</h1>, {
    headers: {
      "Content-Type": "text/html",
      //   manual setting of cookie value, frist approach
      "Set-Cookie": "theme=dark",
    },
  });
// return Response.json(profiles)
}

export async function POST(request){
    const item = await request.json()
    const newItem= await{
        id:profiles.length+1,
        ...item
    }
    await profiles.push(newItem)
    return new Response(JSON.stringify(newItem),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}
