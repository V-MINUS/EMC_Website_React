import React from 'react';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string[];
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, imageSrc }) => {
  return (
    <div className="team-card">
      <div className="team-card-image flex justify-center">
        <div className="relative w-full max-w-[240px] h-[240px] overflow-hidden rounded-lg">
          <img 
            src={imageSrc || '/images/team-placeholder.jpg'} 
            alt={name}
            className="team-image object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = '/images/team-placeholder.jpg';
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
