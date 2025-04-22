import React, { ReactNode } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ 
  level, 
  children, 
  className = '' 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`heading heading-${level} ${className}`}>{children}</Tag>;
};

interface TextProps {
  children: ReactNode;
  muted?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  muted = false, 
  size = 'md',
  className = '' 
}) => {
  return (
    <p className={`text text-${size} ${muted ? 'text-muted' : ''} ${className}`}>
      {children}
    </p>
  );
};
