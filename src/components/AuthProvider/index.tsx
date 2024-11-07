'use client';

import { SessionProvider, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { ReactNode } from 'react';

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
  const { data: session } = useSession();

  return (
    <header className="w-full flex justify-between px-4 py-4 bg-transparent shadow-2xl">
      <div className="text-white text-3xl text-center flex flex-row items-center ">
        <Image
          src={logo}
          alt="DS3 Logo"
        />
        <p className="pl-8"> Volunteer Scanning Page</p>
      </div>
      {session && session.user && (
        <Button
          paddingX="px-8"
          fontSize="text-xl"
          onClick={() => signOut()}>
          Logout
        </Button>
      )}
    </header>
  );
};
