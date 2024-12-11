import { NextResponse } from "next/server";
import { auth } from "./auth";

// 1. Specify protected and public routes
const protectedRoutes = ["/invoices"];
const publicRoutes = ["/login", "/signup", "/"];

export default auth((req) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (!req.auth && isProtectedRoute) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  if (
    req.auth &&
    isPublicRoute &&
    !req.nextUrl.pathname.startsWith("/invoices")
  ) {
    return NextResponse.redirect(new URL("/invoices", req.nextUrl));
  }
});

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
