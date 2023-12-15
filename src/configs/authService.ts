import { users } from '@/vendor/users/users';
import { Credentials, User } from '@/types';

export function login(credentials: Credentials): User | null {
  const user = users.find(
    u => u.email === credentials.email && u.password === credentials.password,
  );

  if (user) {
    const { password, ...userWithoutPass } = user;
    return userWithoutPass as User;
  } else {
    return null;
  }
}
