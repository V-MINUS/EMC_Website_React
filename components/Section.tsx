import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  className = '', 
  children,
  dark = false
}) => {
  return (
    <section className={`section ${dark ? 'section-dark' : ''} ${className}`}>
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <div className="section-line"></div>
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
