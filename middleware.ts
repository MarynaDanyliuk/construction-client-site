import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/ua";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // middleware спрацьовує лише на /
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Якщо на корені
//   if (pathname === "/") {
//     const locale = "ua"; // тут можна динамічно визначати за мовою браузера
//     return NextResponse.redirect(new URL(`/${locale}`, request.url));
//   }
// }
