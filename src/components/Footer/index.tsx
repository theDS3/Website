import Link from 'next/link';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaYoutube,
} from 'react-icons/fa';
import { brand } from '@/utils/brand';
import { instrumentSerif } from '@/utils/fonts';

// TODO: put the real DS3 email here
const EMAIL = 'thedatasciencecube@gmail.com';

const palette = [brand.purple, brand.pink, brand.green];

const socials = [
  {
    href: 'https://www.instagram.com/ds3.utsc',
    icon: <FaInstagram />,
    label: 'Instagram',
  },
  { href: 'https://github.com/theDS3', icon: <FaGithub />, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/company/the-data-science-statistics-society/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://discord.com/invite/xDpujjZ',
    icon: <FaDiscord />,
    label: 'Discord',
  },
  {
    href: 'https://www.youtube.com/@ds3UTSC',
    icon: <FaYoutube />,
    label: 'YouTube',
  },
  {
    href: 'https://medium.com/@thedatasciencecube',
    icon: <FaMedium />,
    label: 'Medium',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform',
    icon: <FaEnvelope />,
    label: 'DS3 Mailing List',
  },
];

const quickLinks = [
  { href: '/#about', text: 'About' },
  { href: '/#sponsors', text: 'Sponsors' },
  { href: '/team', text: 'Team' },
  { href: '/events?show=current', text: 'Current events' },
  { href: '/events?show=past', text: 'Past events' },
];

const headingClass = `${instrumentSerif.className} mb-5 text-3xl font-normal text-white`;

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full border-t border-white/10 px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          {/* Contact */}
          <div>
            <h3 className={headingClass}>Contact us</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                Email:{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
                  {EMAIL}
                </a>
              </li>
              <li>University of Toronto Scarborough</li>
              <li>1265 Military Trail, Toronto, ON</li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h3 className={headingClass}>Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, text }, i) => (
                <li key={text}>
                  <Link
                    href={href}
                    style={
                      {
                        '--c': palette[i % palette.length],
                      } as React.CSSProperties
                    }
                    className="text-white/70 transition-colors duration-200 hover:text-[color:var(--c)]">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="md:justify-self-end">
            <h3 className={headingClass}>Follow us</h3>
            <div className="flex flex-wrap justify-center gap-3 md:max-w-[220px] md:justify-start">
              {socials.map(({ href, icon, label }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={
                    {
                      '--c': palette[i % palette.length],
                    } as React.CSSProperties
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-lg text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--c)] hover:bg-[color:var(--c)]">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          Copyright © DS<sup>3</sup> {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
