
export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
  dataTestId: string;
  className?: string;
};
