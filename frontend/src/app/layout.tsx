import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Doubter AI — Learn Faster, Clear Doubts Instantly',
  description:
    'Doubter AI connects students with qualified teachers in real time to solve academic doubts through chat, audio, and video calls. Get instant help from the earliest available teacher and learn without interruptions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased doubtr`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
