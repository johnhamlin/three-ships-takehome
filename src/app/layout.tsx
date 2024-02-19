import '@/styles/globals.css';
import type { Metadata } from 'next';

import { LayoutProps } from '../../.next/types/app/layout';

export const metadata: Metadata = {
  title: 'Service Providers Directory',
  description: 'A list of service providers in the area.',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
