import { NextResponse } from "next/server";

// // first approach, using custom matcher config
// ===============================================
// export function middleware(request){
//     return NextResponse.redirect(new URL("/", request.url))
// }
// export const config={
//     matcher:"/profile"
// }

// // second approach, using conditional approach
// ===============================================
// export function middleware(request) {
//   if (request.nextUrl.pathname === "/profile")
//     return NextResponse.redirect(new URL("/hello", request.url));
// }

// working with cookies in middleware
// ===============================================
export function middleware(request) {
  const response = NextResponse.next();
  const loginPreference = request.cookies.get("login");
  if (!loginPreference) response.cookies.set("login", "admin");

//   adding custom headers in middleware
// =====================================
response.headers.set("custom-headers","custom-value")

  return response;
}
