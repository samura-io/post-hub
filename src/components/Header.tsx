'use client';

import Link from 'next/link';
import logo from '@/vendor/images/logo.svg';
import Image from 'next/image';
import style from '@/styles/components/header.module.scss';
import { useStoreon } from 'storeon/react';
import { useEffect, useState } from 'react';
import AuthStatus from './AuthStatus';

function Header() {
  const [userData, setUserData] = useState(null);
  const { user } = useStoreon('user');

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link href="/">
          <Image src={logo} width={120} alt="logo" />
        </Link>
        <AuthStatus user={userData} />
      </div>
    </header>
  );
}

export default Header;
