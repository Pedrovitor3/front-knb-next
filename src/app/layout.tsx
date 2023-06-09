'use client';
import { AuthProvider } from '@/contexts/auth/AuthProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

/*export const metadata = {
  title: 'Template Next13',
  description: 'Generated by create next app',
}*/

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
