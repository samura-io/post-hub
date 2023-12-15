import Header from '@/components/Header';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import styles from '@/styles/global.module.scss';
import { Providers } from '@/components/Providers';

import '@/styles/reset.scss';

export const metadata: Metadata = {
  title: 'PostHub',
  description:
    'Welcome to our vibrant online platform where ideas come to life in words, and discussions serve as wellsprings of inspiration! Explore a diverse array of engaging posts spanning various topics – from technology and science to arts and education. Read, share your thoughts, and connect with like-minded individuals in our welcoming virtual community.',
  keywords: [
    'PostHub',
    'Online platform',
    'Ideas',
    'Discussions',
    'Virtual community',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.global}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
