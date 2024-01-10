'use client';

import {
  SessionProvider,
  getSession,
  signOut,
  useSession,
} from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { Button } from '@/components/Button';
import logo from '@/public/logo.png';

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Header />
      {children}
    </SessionProvider>
  );
}

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  // Check if user is authenticated or not
  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const userSession = await getSession();
      // Redirects the user to main page if they are not authenticated
      if (!userSession) router.push('/');
    };

    checkLoggedInStatus();
  }, [router]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  if (!session) return null;

  return (
    <header className="fixed w-full flex justify-between px-4 py-4 bg-transparent shadow-2xl">
      <Image
        src={logo}
        alt="DS3 Logo"
      />
      <Button
        paddingX="px-8"
        fontSize="text-xl"
        onClick={handleLogout}>
        Logout
      </Button>
    </header>
  );
};
