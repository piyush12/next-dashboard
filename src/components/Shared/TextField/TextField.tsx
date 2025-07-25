import React, { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/utils';

import styles from './TextField.module.css';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  className?: string;
  color?: 'success' | 'error';
  variant?: 'filled' | 'outline';
  fullWidth?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number | undefined;
};

function TextField({
  placeholder,
  className,
  color,
  variant = 'outline',
  fullWidth,
  children,
  defaultValue = '',
  ...props
}: TextFieldProps) {
  const fullWidthClass = fullWidth ? 'fullWidth' : '';
  const textFieldClass = cn(
    'rounded-md px-[14px] py-[7px] text-inputText text-light-primary outline-none',
    styles.textField,
    styles[color || ''],
    styles[variant],
    styles[fullWidthClass],
    className,
  );
  return (
    <>
      <input
        placeholder={placeholder}
        className={textFieldClass}
        defaultValue={defaultValue}
        {...props}
      />
      {children}
    </>
  );
}

TextField.displayName = 'TextField';

export default TextField;
