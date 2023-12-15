'use client';

import styles from '@/styles/pages/greetings.module.scss';
import Button from '@/components/Button';
import { useStoreon } from 'storeon/react';

export default function Greetings() {
  const { user } = useStoreon('user');

  return (
    <section className={styles.greetings}>
      <p className={styles.title}>
        Discover a dynamic online platform where ideas transform into words and
        discussions flow as sources of inspiration. Dive into a diverse
        collection of captivating posts covering a wide range of topics – from
        technology and science to arts and education. Read, share your thoughts,
        and connect with like-minded individuals in our warm and inclusive
        virtual community.
      </p>
      <span className={styles.span}>Ready to get started?</span>
      <Button
        className={styles.btn}
        path={user ? '/list/1' : '/signin'}
        text={user ? "let's go" : 'signin'}
      />
    </section>
  );
}
