import { compare } from 'bcryptjs';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectDB } from '@/db/config';
import Admin from '@/db/models/admin';
import { env } from '@/env/server.mjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
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
    maxAge: 24 * 60 * 60, // Validated for a single day
  },
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};
