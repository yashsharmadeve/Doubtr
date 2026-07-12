import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authRoutes = ['/sign-in', '/register'];
const studentRoutes = ['/dashboard/student'];
const teacherRoutes = ['/dashboard/teacher'];

function dashboardForRole(role?: string) {
  if (role === 'TEACHER') return '/dashboard/teacher';
  if (role === 'ADMIN') return '/dashboard/teacher';
  return '/dashboard/student';
}

function matchesRoute(pathname: string, routes: string[]) {
  return routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

/** Read role from cookie, or fall back to JWT payload (routing only — API still verifies). */
function resolveRole(request: NextRequest, token?: string) {
  const cookieRole = request.cookies.get('role')?.value;
  if (cookieRole) return cookieRole;

  if (!token) return undefined;

  try {
    const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))) as {
      role?: string;
    };
    return payload.role;
  } catch {
    return undefined;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;
  const role = resolveRole(request, token);

  const isAuthRoute = matchesRoute(pathname, authRoutes);
  const isStudentRoute = matchesRoute(pathname, studentRoutes);
  const isTeacherRoute = matchesRoute(pathname, teacherRoutes);
  const isDashboardRoute = pathname === '/dashboard' || pathname.startsWith('/dashboard/');

  // Logged-in users cannot visit login/register
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL(dashboardForRole(role), request.url));
  }

  // Dashboard requires auth
  if (!token && isDashboardRoute) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Role-based route guards
  if (token && isStudentRoute && role !== 'STUDENT') {
    return NextResponse.redirect(new URL(dashboardForRole(role), request.url));
  }

  if (token && isTeacherRoute && role !== 'TEACHER') {
    return NextResponse.redirect(new URL(dashboardForRole(role), request.url));
  }

  // /dashboard → role home
  if (token && pathname === '/dashboard') {
    return NextResponse.redirect(new URL(dashboardForRole(role), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
