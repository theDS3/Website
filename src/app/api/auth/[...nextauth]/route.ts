import { compare } from 'bcryptjs';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectDB } from '@/db/config';
import Admin from '@/db/models/admin';
import { env } from '@/env/server.mjs';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        try {
          connectDB();
          const admin = await Admin.findOne({
            email: credentials.email,
          });

          if (!admin) return null;

          const passwordsMatch = await compare(
            credentials.password,
            admin.hashedPassword,
          );

          return !passwordsMatch ? null : admin;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // Validated for a single day
  },
  secret: env.VALIDATION_SECRET,
  pages: {
    signIn: '/',
  },
  site: env.NEXTAUTH_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
