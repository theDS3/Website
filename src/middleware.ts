// export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({req, token}) => {
      if (req.nextUrl.pathname.startsWith('/admin') && !token?.isAdmin) {
        return false;
      }

      return Boolean(token);
    }
  }
});


export const config = {
  matcher: [
    '/volunteer/:path*', 
    '/admin/:path*',
  ],
};
