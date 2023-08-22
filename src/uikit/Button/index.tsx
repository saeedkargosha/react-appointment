import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'type'> {
  disabled?: boolean;
  uppercase?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  type?: 'error' | 'default';
}

const Button = ({
  children,
  disabled = false,
  className = '',
  uppercase = false,
  variant = 'primary',
  type = 'default',
  isLoading = false,
  ...rest
}: IProps) => {
  const classname = clsx('font-medium rounded-lg text-sm px-5 py-2.5', {
    [className]: className,
    'text-gray-900 bg-white rounded-lg border border-gray-200': variant === 'secondary',
    'text-white bg-blue-700': variant === 'primary',
    'text-white bg-red-700': type === 'error',
  });
  return (
    <button className={classname} disabled={disabled} {...rest}>
      {!isLoading ? children : <span>{'Loading'}</span>}
    </button>
  );
};

export default Button;
