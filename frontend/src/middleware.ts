import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/akai-owner-dashboard')) {
    // In a real app, we'd check a secure httpOnly cookie here.
    // For now, the page itself does a profile check,
    // but we can add a basic check or just let it pass if we want to show 404 later.
    // To truly return 404 for unauthorized, we'd need to know if they are logged in.
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/akai-owner-dashboard/:path*',
};
