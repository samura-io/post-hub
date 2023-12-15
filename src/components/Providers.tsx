'use client';

import { StoreContext } from 'storeon/react';
import store from '@/store/store';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};


