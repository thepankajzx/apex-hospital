import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};
