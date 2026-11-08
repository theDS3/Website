import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
});

export const parkinsans = localFont({
  src: '../fonts/parkinsans-latin-wght-normal.woff2',
  weight: '300 800', // variable font: every weight in this range
  display: 'swap',
});
