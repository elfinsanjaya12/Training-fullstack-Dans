import React from 'react';
import { Button } from 'react-bootstrap';

export default function PButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={action}
    >
      {loading ? 'Loading...' : children}
    </Button>
  );
}