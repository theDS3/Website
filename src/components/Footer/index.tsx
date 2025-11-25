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

const icons = [
  {
    href: 'https://discord.com/invite/xDpujjZ',
    icon: <FaDiscord style={{ fontSize: '2rem' }} />,
    label: 'Discord',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform',
    icon: <FaEnvelope style={{ fontSize: '2rem' }} />,
    label: 'DS3 Mailing List',
  },
  {
    href: 'https://github.com/theDS3',
    icon: <FaGithub style={{ fontSize: '2rem' }} />,
    label: 'Github',
  },
  {
    href: 'https://www.instagram.com/ds3.utsc',
    icon: <FaInstagram style={{ fontSize: '2rem' }} />,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/the-data-science-statistics-society/?fbclid=IwAR0pK1obf403GMp6qXzIQm_1F9zFZjKrTMx8FlBBD3D-j5BM4vi6gQGUF2U',
    icon: <FaLinkedin style={{ fontSize: '2rem' }} />,
    label: 'LinkedIn',
  },
  {
    href: 'https://medium.com/@thedatasciencecube',
    icon: <FaMedium style={{ fontSize: '2rem' }} />,
    label: 'Medium',
  },
  {
    href: 'https://www.youtube.com/@ds3UTSC',
    icon: <FaYoutube style={{ fontSize: '2rem' }} />,
    label: 'YouTube',
  },
];

const links = [
  {
    href: '/#about-us',
    text: 'About Us',
  },
  {
    href: '/#sponsors',
    text: 'Sponsors',
  },
  {
    href: '/#team',
    text: 'Our Team',
  },
  {
    href: '/hackathon',
    text: 'Hackathon',
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center w-full z-5 px-4 backdrop-blur pt-2 bg-transparent shadow-2xl">
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="justify-self-start">
            <p className="text-white font-bold text-xl text-center sm:text-left">
              STAY CONNECTED
            </p>
            <p className="text-gray-400 pt-2 text-center sm:text-left">
              Join the ML, Data Science, and Statistics Club at the University
              of Toronto Scarborough.
            </p>
            <div className="flex space-x-2 pt-8 justify-center sm:justify-start pb-8">
              {icons.map(({ href, icon, label }, index) => (
                <Link
                  key={`social-link-${index}`}
                  href={encodeURI(href)}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}>
                  <div className="text-gray-400 hover:text-amber-100/80 transition duration-300 cursor-pointer">
                    {icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:justify-self-end justify-self-center pb-8">
            <p className="text-white font-bold text-xl">QUICK LINKS</p>
            <div className="border-b-2 border-gray-400 w-25 mx-auto mb-4"></div>
            <div className="flex flex-col space-y-2 items-center">
              {links.map(({ href, text }, index) => (
                <Link
                  key={`quick-link-${index}`}
                  href={href}
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-gray-400 border-t border-b border-gray-500/50 p-2 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
          <p className="lg:mr-2 text-center">
            University of Toronto Scarborough
            <span className="hidden lg:inline">•</span>
            <br className="lg:hidden" /> 1295 Military Trail, Toronto, ON M1C
            1A4
          </p>
        </div>
        <div className="text-gray-400 text-center pt-4">
          <p className="text-sm">
            Copyright © DS<sup>3</sup> 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
