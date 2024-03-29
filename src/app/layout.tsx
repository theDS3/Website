import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DS3',
  description:
    'We are a group of like-minded individuals at the University of Toronto driving impact in the fields of data science, statistics, and machine learning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
