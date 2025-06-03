'use client';
import React from 'react';

import { useFormStatus } from 'react-dom';

import { ComponentLoader } from '@/components/ComponentLoader';
import Button from '@/components/Shared/Button';

import { ButtonProps } from '../Shared/Button/Button';

function Loader() {
  return (
    <>
      <ComponentLoader /> Loading...
    </>
  );
}

function SubmitButton({
  children,
  variant = 'default',
  fullwidth = false,
  type,
  ...props
}: ButtonProps & {
  children: React.ReactNode;
}) {
  const status = useFormStatus();
  return (
    <Button
      variant={variant}
      fullwidth={fullwidth}
      type={type}
      disabled={status.pending}
      {...props}
    >
      {status.pending ? <Loader /> : children}
    </Button>
  );
}

export default SubmitButton;
