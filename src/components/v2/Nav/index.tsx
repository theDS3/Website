'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { brand } from '@/utils/brand';
import logo from '@/public/logo.png';

type NavLink = {
  label: string;
  href: string;
  color: string;
  children?: { label: string; href: string; color: string }[];
};

const links: NavLink[] = [
  { label: 'about', href: '/#about', color: brand.purple },
  { label: 'sponsors', href: '/#sponsors', color: brand.pink },
  { label: 'team', href: '/team', color: brand.green },
  {
    label: 'events',
    href: '/events',
    color: '#ffb020',
    children: [
      {
        label: 'current events',
        href: '/events?show=current',
        color: brand.pink,
      },
      { label: 'past events', href: '/events?show=past', color: '#5eb0ff' },
    ],
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/theDS3', icon: <FaGithub /> },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ds3.utsc',
    icon: <FaInstagram />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/the-data-science-statistics-society/',
    icon: <FaLinkedin />,
  },
  {
    label: 'Email',
    href: 'mailto:thedatasciencecube@gmail.com',
    icon: <FaEnvelope />,
  },
];

export default function Nav({ delay = 0 }: { delay?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#101010]/70 backdrop-blur-md"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}>
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="DS3"
            height={32}
            className="h-8 w-auto"
          />
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-white/40 sm:block">
            UTSC
          </span>
        </Link>

        {/* Links (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href, color, children }) =>
            children ? (
              <div
                key={label}
                className="group relative">
                <Link
                  href={href}
                  style={{ '--c': color } as React.CSSProperties}
                  className="flex items-center gap-1 text-sm text-white/80 transition-colors duration-200 hover:text-[color:var(--c)] group-focus-within:text-[color:var(--c)]">
                  {label}
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </Link>

                {/* pt-4 keeps the hover alive across the gap between link and panel */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="flex min-w-40 flex-col gap-1 rounded-xl border border-white/10 bg-[#101010]/90 p-2 backdrop-blur-md">
                    {children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        style={{ '--c': c.color } as React.CSSProperties}
                        className="rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-[color:var(--c)]">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={label}
                href={href}
                style={{ '--c': color } as React.CSSProperties}
                className="text-sm text-white/80 transition-colors duration-200 hover:text-[color:var(--c)]">
                {label}
              </Link>
            ),
          )}
        </nav>

        {/* Socials (desktop) */}
        <div className="hidden items-center justify-end gap-4 md:flex">
          <span className="h-4 w-px bg-white/20" />
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-base text-white/70 transition-colors hover:text-white">
              {icon}
            </a>
          ))}
        </div>

        {/* Hamburger (phones) */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] justify-self-end md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}>
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="overflow-hidden border-t border-white/10 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map(({ label, href, color, children }) => (
                <div
                  key={label}
                  className="flex flex-col gap-3">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold"
                    style={{ color }}>
                    {label}
                  </Link>
                  {children?.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="pl-4 text-lg font-medium"
                      style={{ color: c.color }}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex gap-5 pt-2 text-xl text-white/70">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
