import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/common/nav';
import Footer from './components/common/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: 'Apexiums School | Official Website',
  description:
    'Apexiums School public website and multi-role dashboards for students, teachers, and admin.',
  metadataBase: new URL('https://apexiumsschool.edu'),
  openGraph: {
    title: 'Apexiums School | Official Website',
    description:
      'Official website for Apexiums School with admissions, academics, events, and role-based portals.',
    type: 'website',
    url: 'https://apexiumsschool.edu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apexiums School',
    description:
      'Student-first school website with admissions, events, and secure role-based dashboards.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
