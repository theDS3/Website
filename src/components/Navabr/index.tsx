'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import DS3_Logo from '@/public/logo.png';
import './Navbar.css';

const links = [
  { title: 'About Us', href: '/#about-us' },
  { title: 'Sponsors', href: '/#sponsors' },
  { title: 'Team', href: '/#team' },
  { title: 'Events', href: '/#events' },
];

export default function NavBar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <header
      className={`fixed w-full flex justify-between z-5 backdrop-blur-sm px-4 pt-2 bg-transparent shadow-2xl ${
        toggle
          ? 'h-full pb-[calc(100vh-5em)] transition duration-1000 ease-in-out md:h-auto md:pb-0 md:transition-none portrait:h-auto'
          : ''
      }`}
      onClick={toggleMenu}>
      <Link
        href="/#intro"
        tabIndex={0}>
        <Image
          priority
          src={DS3_Logo}
          alt="DS3 Logo"
          height={65}
          width={65}
        />
      </Link>
      <nav
        className={`fixed w-full left-0 -top-[100vh] duration-1000 md:static md:w-auto md:duration-0 md:visible ${
          toggle
            ? 'h-full visible translate-y-[calc(100vh_+_5em)] transition ease-in-out duration-1000 md:h-auto md:transform-none md:transition-none'
            : 'invisible'
        } `}>
        <ul
          className={`mb-0 md:pl-0 flex flex-wrap justify-between items-center ${
            toggle ? 'active' : ''
          }`}>
          {links.map((link, id) => {
            return (
              <li
                className="item block order-3 w-full text-center p-[10px] md:relative md:w-auto"
                key={id}>
                <Link
                  className="block text-2xl md:text-lg text-white px-[5px] py-[15px] font-bold"
                  href={link.href}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`toggle ${
          toggle ? 'open' : ''
        } md:hidden w-[65px] h-[65px] relative mt-[10px] caret-transparent cursor-pointer rotate-0 transition ease-in-out duration-500 motion-reduce:transition-none`}
        onClick={toggleMenu}>
        {[...Array(6)].map((_, id) => {
          return (
            <span
              key={id}
              className="block absolute h-[9px] w-1/2 bg-white  opacity-100 rotate-0"></span>
          );
        })}
      </div>
    </header>
  );
}
