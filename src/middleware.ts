import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 如果访问的是根路径，重定向到 /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // 允许其他路径正常访问
  return NextResponse.next();
}

// 仅对根路径应用此 middleware
export const config = {
  matcher: '/',
};