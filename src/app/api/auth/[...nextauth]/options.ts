import { compare } from 'bcryptjs';
import type { DefaultSession, NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectDB } from '@/db/config';
import Volunteer from '@/db/models/volunteer';
import { env } from '@/env/server.mjs';

declare module 'next-auth' {
  interface Session {
    user: {
      isAdmin: boolean;
    } & DefaultSession['user'];
  }
}

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
          const volunteer = await Volunteer.findOne({
            email: credentials.email,
          });

          if (!volunteer) return null;

          const passwordsMatch = await compare(
            credentials.password,
            volunteer.hashedPassword,
          );

          return !passwordsMatch ? null : volunteer;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = (user as any).isAdmin;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin as boolean;
      }
      return session;
    },
  },
  session: {
    maxAge: 24 * 60 * 60, // Validated for a single day
    strategy: 'jwt',
  },
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};
