'use client';

import { SessionProvider, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

import { Button } from '@/components/Button';
import logo from '@/public/logo.png';
import Link from 'next/link';

const routes = [
    {title: 'Hacker Applications', href: '/admin/applications', forAdmin: true},
    {title: 'QR Scanner', href: '/volunteer/scan', forAdmin: false},
]

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
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center z-40 backdrop-blur-sm px-4 py-2 bg-transparent shadow-2xl ${
        toggle &&
        'h-full pb-[calc(100vh-5em)] transition duration-1000 ease-in-out md:h-auto md:pb-0 md:transition-none portrait:h-auto'
      }`}>
      <a
        href={session ? '/volunteer/scan' : '/'}
        tabIndex={0}>
        <Image
          priority
          src={logo}
          alt="DS3 Logo"
          width={50}
          height={50}
        />
      </a>
      {routes.length > 0 && (
        <>
          <nav
            className={`fixed w-full left-0 -top-[100vh] duration-1000 md:static md:w-auto md:duration-0 md:visible ${
              toggle
                ? 'h-full visible translate-y-[calc(100vh_+_5em)] transition ease-in-out duration-1000 md:h-auto md:transform-none md:transition-none'
                : 'invisible'
            } `}>
            <ul
              className={`mb-0 md:pl-0 flex flex-wrap justify-between items-center ${
                toggle && 'active'
              }`}>
              {routes.map(({ href, title, forAdmin }, id) => {
                return (
                  <li
                    className="item block order-3 w-full text-center p-[10px] md:relative md:w-auto"
                    key={id}>
                      {(forAdmin === session?.user.isAdmin && 
                        <Link
                          className="block text-2xl md:text-lg text-white px-[5px] py-[15px] font-bold"
                          href={encodeURI(href)}
                          onClick={() => setToggle(false)}>
                          {title}
                        </Link>
                        ) || (
                          (session && forAdmin === false) && (
                          <Link
                            className="block text-2xl md:text-lg text-white px-[5px] py-[15px] font-bold"
                            href={encodeURI(href)}
                            onClick={() => setToggle(false)}>
                            {title}
                          </Link>
                          )
                        )
                      }
                  </li>
                );
              })}
            </ul>
          </nav>
          {session && session.user && (
            <Button
              paddingX="px-8"
              fontSize="text-xl"
              onClick={() => signOut()}>
              Logout
            </Button>
          )}
          <div
            className={`toggle md:hidden md:pointer-events-none w-[65px] h-[65px] relative mt-[10px] caret-transparent cursor-pointer rotate-0 transition ease-in-out duration-500 motion-reduce:transition-none ${
              toggle && 'open'
            } `}
            onClick={() => setToggle(!toggle)}>
            {[...Array(6)].map((_, id) => {
              return (
                <span
                  key={id}
                  className="block absolute h-[9px] w-1/2 bg-white opacity-100 rotate-0"
                />
              );
            })}
          </div>
        </>
      )}
    </header>
  );
};
