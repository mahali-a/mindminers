import { Metadata } from 'next';

import './globals.css';

import { Lato } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Mindminers`,
  description: `Mindminers is a platform for learning and training in the field of mindminers`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lato.className}`}>
      <body>{children}</body>
    </html>
  );
}
