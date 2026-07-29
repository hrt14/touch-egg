import type { Metadata } from 'next';
import './globals.css';
import './interaction-fixes.css';

export const metadata: Metadata = {
  title: 'Touch Egg',
  description: '触るだけ。いつか生まれる。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
