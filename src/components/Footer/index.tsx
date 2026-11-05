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

// TODO: put the real DS3 email here
const EMAIL = 'thedatasciencecube@gmail.com';

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
  { href: '/#about-us', text: 'About' },
  { href: '/#sponsors', text: 'Sponsors' },
  { href: '/team', text: 'Team' },
  { href: '/hackathon', text: 'Hackathon' },
  { href: '/agentic-ai', text: 'Agentic AI Program' },
];

const headingClass = 'text-lg font-bold text-white mb-5';
const linkClass =
  'text-white/70 hover:text-white transition-colors duration-200';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full px-6 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          {/* Contact */}
          <div>
            <h3 className={headingClass}>Contact Us</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                Email:{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li>University of Toronto Scarborough</li>
              <li>1265 Military Trail, Toronto, ON</li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={linkClass}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="md:justify-self-end">
            <h3 className={headingClass}>Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start md:max-w-[220px]">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-500 hover:border-purple-400">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6 text-center text-sm text-white/50">
          Copyright © DS<sup>3</sup> {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
