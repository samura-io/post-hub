'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/types';

export default function Button({ path, text, back, className, type }: Button) {
  const router = useRouter();

  const handleClick = () => {
    if (back) {
      router.back();
    } else if (path) {
      router.push(path);
    }
  };

  return (
    <button type={type} className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
