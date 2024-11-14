'use client';

import { SessionProvider, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import './nav.css';

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
      className={`fixed top-0 w-full flex justify-between items-center z-40 backdrop-blur-xl px-4 py-3 bg-transparent shadow-2xl ${
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
            className={`fixed flex w-full md:flex-row flex-col left-0 -top-[100vh] duration-1000 md:gap-6 md:static md:w-auto md:duration-0 md:visible items-center ${
              toggle
                ? 'h-4/6 visible translate-y-[calc(100vh_+_6em)] transition ease-in-out duration-1000 md:h-auto md:transform-none md:transition-none'
                : 'invisible'
            } `}>
            <div className='grow'>
              <ul
                className={`mb-0 md:pl-0 flex flex-col md:flex-row flex-wrap max-md:gap-6 gap-2 justify-between max-md:items-center ${
                  toggle && 'active'
                }`}>
                {routes.map(({ href, title, forAdmin }, id) => {
                  return (
                    <li
                      className="item block order-3 w-full text-center p-1.5 md:relative md:w-auto"
                      key={id}>
                        {(forAdmin === session?.user.isAdmin && 
                          <Link
                            className="block text-2xl md:text-lg text-white px-[5px] py-[10px] font-bold"
                            href={encodeURI(href)}
                            onClick={() => setToggle(false)}>
                            {title}
                          </Link>
                          ) || (
                            (session && forAdmin === false) && (
                            <Link
                              className="block text-2xl md:text-lg text-white px-[5px] py-[10px] font-bold"
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
            </div>
            <div className=''>
              {session && session.user && (
                <Button
                paddingX="px-8"
                fontSize="text-xl"
                onClick={() => signOut()}>
                Logout
                </Button>
              )}
            </div>
          </nav>
          <div
            className={`toggle md:hidden md:pointer-events-none w-[60px] h-[50px] relative mt-[10px] caret-transparent cursor-pointer rotate-0 transition ease-in-out duration-500 motion-reduce:transition-none ${
              toggle && 'open'
            } `}
            onClick={() => setToggle(!toggle)}>
            {session && [...Array(6)].map((_, id) => {
              return (
                <span
                  key={id}
                  className="block absolute h-[6px] w-1/2 bg-white opacity-100 rotate-0"
                />
              );
            })}
          </div>
        </>
      )}
    </header>
  );
};
