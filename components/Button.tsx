import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '',
  ...props 
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClass} role="button" tabIndex={0}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
