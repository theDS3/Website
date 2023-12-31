import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/db/config';
import Administrator from '@/db/models/administrator';
import bcrypt from 'bcryptjs';
import { RequestInternal } from 'next-auth';

interface MyCredentials {
  email: string;
  password: string;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials?: MyCredentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          connectDB();
          const admin = await Administrator.findOne({ email });

          if (!admin) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, admin.password);

          if (!passwordsMatch) {
            return null;
          }

          return admin;
        } catch (error) {
          console.log('Error: ', error);
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.VALIDATION_SECRET,
  pages: {
    signIn: '/datathon',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
