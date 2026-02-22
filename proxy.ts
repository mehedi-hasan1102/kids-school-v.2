import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getDashboardPath, parseRole } from '@/app/lib/auth';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const role = parseRole(request.cookies.get('school_role')?.value);

  if (pathname === '/login' && role) {
    return NextResponse.redirect(new URL(getDashboardPath(role), request.url));
  }

  const match = pathname.match(/^\/dashboard\/(student|teacher|admin)(?:\/|$)/);
  if (!match) {
    return NextResponse.next();
  }

  const requestedRole = parseRole(match[1]);

  if (!role || !requestedRole) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (role !== requestedRole) {
    return NextResponse.redirect(new URL(getDashboardPath(role), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
