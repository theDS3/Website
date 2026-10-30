'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/utils/navItems';
import logo from '@/public/logo.png';

export default function NavBar() {
  const [open, setOpen] = useState<number | null>(null);
  const [offset, setOffset] = useState(0); // left edge of the clicked tab
  const navRef = useRef<HTMLElement>(null);

  // Esc closes the panel, and so does clicking/tapping anywhere outside the navbar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  const toggle = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    setOffset(e.currentTarget.getBoundingClientRect().left);
    setOpen(open === i ? null : i);
  };

  const active = open !== null ? navItems[open] : null;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 inset-x-0 z-50 bg-[#0f0718]/30 backdrop-blur-md text-white">
      <div className="relative flex items-center justify-center gap-10 px-8 py-5">
        {/* Logo, pinned left */}
        <Link
          href="/"
          className="absolute left-8"
          onClick={() => setOpen(null)}>
          <Image
            src={logo}
            alt="DS3"
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Tabs */}
        {navItems.map((item, i) => (
          <button
            key={item.title}
            onClick={(e) => toggle(i, e)}
            aria-expanded={open === i}
            className="flex items-center gap-2 font-semibold text-white">
            {item.title}
            <svg
              viewBox="0 0 12 12"
              className={`h-3 w-3 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5">
              <path d="M2 4l4 4 4-4" />
            </svg>
          </button>
        ))}
      </div>

      {/* Full-width panel */}
      {active?.children && (
        <div className="absolute inset-x-0 top-full bg-[#1a0b2e]/85 backdrop-blur-md">
          <div
            className="relative py-8 pr-8"
            style={{ paddingLeft: offset }}>
            <ul className="flex flex-col gap-2">
              {active.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={() => setOpen(null)}
                    className="text-white/90 hover:text-white">
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(null)}
              aria-label="Close menu"
              className="absolute right-8 top-6">
              <svg
                viewBox="0 0 40 20"
                className="h-5 w-10"
                fill="none"
                stroke="white"
                strokeWidth="1.5">
                <path d="M2 18l18-16 18 16" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
