import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary';
}

const Button = ({
  children,
  variant = 'primary',
  style,
  ...props
}: ButtonProps) => {
  const isPrimaryVariant = variant === 'primary';

  const buttonStyle: CSSProperties = {
    backgroundColor: isPrimaryVariant ? 'darkblue' : 'lightgray',
    color: isPrimaryVariant ? 'white' : 'black',
    outline: 'none',
    padding: '10px 12px',
    border: 'none',
    borderRadius: 50,
  };

  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
