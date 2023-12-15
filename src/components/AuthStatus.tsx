import Link from 'next/link';
import { useStoreon } from 'storeon/react';
import styles from '@/styles/components/authStatus.module.scss';
import { AuthStatusProps } from '@/types';

export default function AuthStatus({ user }: AuthStatusProps) {
  const { dispatch } = useStoreon();

  const handleClick = () => {
    dispatch('logout');
  };

  return (
    <div className={styles.auth}>
      {user ? (
        <>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.email}>{user.email}</span>
          <Link className={styles.link} href={'/'} onClick={handleClick}>
            logout
          </Link>
        </>
      ) : (
        <>
          <span className={styles.name}>Welcome, Guest</span>
          <Link className={styles.link} href={'/signin'} onClick={handleClick}>
            sign in
          </Link>
        </>
      )}
    </div>
  );
}
