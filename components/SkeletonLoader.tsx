import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = 'var(--border-radius)',
  className = ''
}) => {
  return (
    <div 
      className={skeleton-loader }
      style={{
        width,
        height,
        borderRadius,
        background: 'linear-gradient(90deg, var(--color-background-alt) 0%, rgba(255,255,255,0.1) 50%, var(--color-background-alt) 100%)',
        backgroundSize: '200% 100%',
        animation: 'skeleton-loading 1.5s infinite',
      }}
    />
  );
};

export default SkeletonLoader;
