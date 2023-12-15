'use client';

import { FormEventHandler } from 'react';
import Button from './Button';
import { useStoreon } from 'storeon/react';
import { useRouter } from 'next/navigation';
import { login } from '@/configs/authService';
import style from '@/styles/components/signinForm.module.scss';
import { Credentials } from '@/types';

export default function SignInForm() {
  const router = useRouter();
  const { dispatch } = useStoreon();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const credentials: Credentials = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      const user = login(credentials);

      if (user) {
        dispatch('login', user);
        router.push('/list/1');
      } else {
        alert('Неверные учетные данные');
      }
    } catch (error) {
      console.error('Ошибка при аутентификации', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label} htmlFor="email">
        Email:
      </label>
      <input
        className={style.input}
        type="email"
        name="email"
        id="email"
        defaultValue="Aleksankin2@yandex.ru"
        required
      />
      <label className={style.label} htmlFor="password">
        Password:
      </label>
      <input
        className={style.input}
        type="password"
        name="password"
        id="password"
        defaultValue="123456"
        required
      />
      <Button className={style.btn} text="Sign in" type="submit" />
    </form>
  );
}
