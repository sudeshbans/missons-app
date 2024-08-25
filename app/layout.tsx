import '@/styles/globals.css';

import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import { TRPCReactProvider } from '@/trpc/react';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'SpaceX',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Providers>
          {children}
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
