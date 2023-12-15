export type User = {
  id: string;
  email: string;
  name: string;
  role: string;
};

export type AuthStatusProps = {
  user: User | null;
};

export type AuthState = {
  user: User | null;
};

export type AuthEvents = {
  login: User;
  logout: undefined;
};
