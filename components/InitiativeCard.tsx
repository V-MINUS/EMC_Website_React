import React, { useState } from 'react';

interface InitiativeCardProps {
  title: string;
  date?: string;
  location?: string;
  content: string[];
  expandableContent?: string[];
  image?: string;
  isFeatured?: boolean;
  tags?: string[];
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  title,
  date,
  location,
  content,
  expandableContent,
  image,
  isFeatured = false,
  tags = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Default fallback image if the specified image is missing
  const [imgSrc, setImgSrc] = useState(image || '/images/event-placeholder.jpg');

  // Handle image loading error
  const handleImageError = () => {
    console.log(`Image failed to load: ${image}`);
    setImgSrc('/images/event-placeholder.jpg');
  };

  return (
    <div className={`initiative-card ${isFeatured ? 'initiative-card-featured' : ''}`}>
      {imgSrc && (
        <div className="initiative-card-image">
          <img 
            src={imgSrc} 
            alt={title} 
            onError={handleImageError}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
      <div className="initiative-card-content">
        <h3>{title}</h3>
        
        {(date || location) && (
          <div className="initiative-meta">
            {date && <span className="initiative-date">{date}</span>}
            {location && <span className="initiative-location">{location}</span>}
          </div>
        )}
        
        {tags.length > 0 && (
          <div className="initiative-tags">
            {tags.map((tag, index) => (
              <span key={index} className="initiative-tag">{tag}</span>
            ))}
          </div>
        )}
        
        <div className="initiative-description">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {expandableContent && expandableContent.length > 0 && (
          <div className="initiative-expandable">
            <button 
              className="expand-button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="expandable-content"
            >
              {isExpanded ? 'Read Less' : 'Read More'} 
              <span className="arrow">{isExpanded ? '' : ''}</span>
            </button>
            
            {isExpanded && (
              <div 
                className="expandable-content"
                id="expandable-content"
              >
                {expandableContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InitiativeCard;
