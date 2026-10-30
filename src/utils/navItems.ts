export type NavItem = {
  title: string;
  children: { title: string; href: string }[];
};

export const navItems: NavItem[] = [
  {
    title: 'Home',
    children: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/#about-us' },
      { title: 'Sponsors', href: '/#sponsors' },
      { title: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'The Team',
    children: [
      { title: 'Current Team', href: '/team#current' },
      { title: '25-26 Team', href: '/team#2025-26' },
      { title: '24-25 Team', href: '/team#2024-25' },
    ],
  },
  {
    title: 'Events',
    children: [
      { title: 'Current Events', href: '/events/current' },
      { title: 'Past Events', href: '/events/past' },
      { title: 'Hackathon', href: '/hackathon' },
      { title: 'Agentic AI Program', href: '/agentic-ai' },
    ],
  },
];
