import type { Metadata } from 'next';
import './globals.css';
import { parkinsans } from '@/utils/fonts';

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
      <body className={parkinsans.className}>{children}</body>
    </html>
  );
}
