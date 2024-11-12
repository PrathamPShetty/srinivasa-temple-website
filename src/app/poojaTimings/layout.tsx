import { LanguageProvider } from '@/context/LanguageContext'; // Import the provider
import type { Metadata } from 'next';
import { Inter, Urbanist } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Srinivasa Temple | Srinivas Valachil Campus',
  description: 'This is a portal for Srinivasa Temple, located in Valachil, Mangalore. Developed by Pratham P Shetty | https://github.com/PrathamPShetty , a student at Srinivas Institute of Technology.',
  keywords: 'Srinivasa Temple, Valachil, Mangalore, temple portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${urbanist.className}`}>
      <LanguageProvider> 
        <body>{children}</body>
      </LanguageProvider>
    </html>
  );
}
