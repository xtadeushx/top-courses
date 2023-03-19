import { clsx } from 'clsx';

import { TButtonProps } from './types';

import styles from './button.module.scss';

const Button = ({
  children,
  onClick,
  type,
  dataTestId,
  className = '',
  ...rest
}: TButtonProps) => {
  return (
    <button
      data-test-id={dataTestId}
      className={clsx(styles.button, className)}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
