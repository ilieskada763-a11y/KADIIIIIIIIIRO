import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/akira-admin-927')) {
    // In a real app, we'd check a secure httpOnly cookie here.
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/akira-admin-927/:path*',
};
