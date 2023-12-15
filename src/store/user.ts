import { StoreonModule } from 'storeon';
import { AuthState, AuthEvents } from '@/types';

export const user: StoreonModule<AuthState, AuthEvents> = store => {
  store.on('@init', () => ({ user: null }));

  store.on('login', (state, user) => {
    return { user };
  });

  store.on('logout', () => {
    return { user: null };
  });
};
