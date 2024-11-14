import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import './env/server.mjs';
import { getToken } from 'next-auth/jwt';

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

export async function middleware(req: any) {
  const token = await getToken({ req });
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