import { compare } from 'bcryptjs';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectDB } from '@/db/config';
import Volunteer from '@/db/models/volunteer';
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
  session: {
    maxAge: 24 * 60 * 60, // Validated for a single day
  },
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};
