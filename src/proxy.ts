import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  // Check if the request is for the admin dashboard
  if (request.nextUrl.pathname.startsWith('/akira-admin-927/dashboard')) {
    // In a real app, we would verify a JWT token from cookies here.
    // For this demonstration, we'll check for a mock session cookie.
    const isAdmin = request.cookies.get('admin_session');

    if (!isAdmin) {
      return NextResponse.redirect(new URL('/akira-admin-927', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/akira-admin-927/:path*',
};
