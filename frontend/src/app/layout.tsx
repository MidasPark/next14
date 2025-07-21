import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '풀스택 프로젝트',
  description: 'Express API + Next.js 14 풀스택 애플리케이션',
  keywords: ['Next.js', 'React', 'TypeScript', 'Express', 'API'],
  authors: [{ name: '풀스택 개발자' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
} 