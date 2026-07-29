import type { Metadata, Viewport } from 'next';
import './globals.css';
import './interaction-fixes.css';

const SITE='https://touch-egg.hitobito.jp';

export const metadata:Metadata={
  metadataBase:new URL(SITE),
  title:'Touch Egg',
  description:'触るだけ。いつか生まれる。世界の神話・伝説・古生物を集める育成コレクション。',
  openGraph:{
    type:'website',
    siteName:'Touch Egg',
    title:'Touch Egg',
    description:'触るだけ。いつか生まれる。',
    url:SITE,
    locale:'ja_JP',
  },
  twitter:{card:'summary_large_image',title:'Touch Egg',description:'触るだけ。いつか生まれる。'},
};

export const viewport:Viewport={
  themeColor:'#f6f1e7',
  width:'device-width',
  initialScale:1,
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="ja"><body>{children}</body></html>;
}