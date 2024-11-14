import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import './env/server.mjs';

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/admin') && !token?.isAdmin) {
        return false;
      }
      return Boolean(token);
    }
  },
  pages: {
    error: '/not-found',
  }
});

export function middleware(req: any) {
  const token = req.cookies.get('next-auth.session-token');
  if (req.nextUrl.pathname.startsWith('/admin') && !token?.isAdmin) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/not-found`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/volunteer/:path*', 
    '/admin/:path*',
  ],
};