import { Metadata } from 'next';

import NavBar, { type Link } from '@/components/Navabr';

const links: Link[] = [
  { title: 'About Us', href: '/datathon#about-us' },
  { title: 'Categories', href: '/datathon#categories' },
  { title: 'Sponsors', href: '/datathon#sponsors' },
];

export const metadata: Metadata = {
  title: 'DS3 | Datathon',
};

export default function Datathon() {
  return (
    <>
      <NavBar links={links} />
      <main></main>
    </>
  );
}
