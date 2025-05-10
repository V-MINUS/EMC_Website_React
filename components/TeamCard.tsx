import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string[];
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, imageSrc }) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <div className="fixed-image-container">
          <img 
            src={imageSrc || '/images/team-placeholder.jpg'} 
            alt={name}
            className="fixed-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/team-placeholder.jpg';
            }}
          />
        </div>
      </div>
      <div className="team-card-content">
        <h3>{name}</h3>
        <h4>{role}</h4>
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
