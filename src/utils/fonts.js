import { Montserrat, Unica_One } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--montserrat',
});

export const unica_one = Unica_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--unica-one',
});

export const clash_display = localFont({
  src: 'ClashDisplay-Bold.woff2',
  display: 'swap',
});
