'use client';

import { Footer } from '@/components/footer';
import { AuthProvider } from '@/contexts/auth-context';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-background text-foreground`}
      >
        <AuthProvider>
          <div className="flex-grow">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

