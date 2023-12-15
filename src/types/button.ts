export type Button = {
  className: string;
  text: string;
  path?: string;
  back?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};
