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
  const baseClass = tn btn- btn- ;
  
  if (href) {
    return (
      <Link href={href}>
        <a className={baseClass} role="button" tabIndex={0}>
          {children}
        </a>
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
