import { NextRequest, NextResponse } from 'next/server';
export { default } from "next-auth/middleware";
import { getToken } from 'next-auth/jwt';

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/",
    "/dashboard/:path*",
    "/verify/:path*",
    "/get-health-details-from-user",
  ]
}
export async function middleware(request: NextRequest) {
    const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET});
    const path = request.nextUrl.pathname;
    if(token && (
           path === "/sign-in" ||
           path === "/sign-up" ||
           path === "/verify"
     ) ) {
           return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    else if(!token && path === "/dashboard") {
        return NextResponse.redirect(new URL ("/sign-in", request.url));
    } else if(!token && path === "/get-health-details-from-user") {
      return NextResponse.redirect(new URL ("/sign-in", request.url));
  }
    return NextResponse.next();
}