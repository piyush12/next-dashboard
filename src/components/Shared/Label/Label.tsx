import React, { ComponentProps } from 'react';

import clsx from 'clsx';

import { cn } from '@/utils/utils';

import styles from './Label.module.css';

type LabelProps = ComponentProps<'label'> & {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
};

function Label({ htmlFor, children, className, ...props }: LabelProps) {
  const labelClass = clsx(styles.label);
  return (
    <label htmlFor={htmlFor} className={cn(labelClass, className)} {...props}>
      {children}
    </label>
  );
}

Label.displayName = 'Label';

export default Label;
