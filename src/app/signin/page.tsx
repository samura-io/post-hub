'use client';

import SignInForm from '@/components/SignInForm';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function SignIn() {
  const { user } = useStoreon('user');

  useEffect(() => {
    if (user) {
      redirect('/list/1');
    }
  }, [user]);

  return <SignInForm />;
}
