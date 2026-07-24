import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
import QueryProvider from '@/providers/QueryProvider';
import Header from '@/components/Header/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Travel Trucks',
  description: 'Travel trucks rental service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <Header />
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
