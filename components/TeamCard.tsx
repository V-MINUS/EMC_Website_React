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
      <div className="team-card-image">
        <div style={{ width: '240px', height: '240px', position: 'relative', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          <Image 
            src={imageSrc || '/images/team-placeholder.jpg'}
            alt={name}
            width={240}
            height={240}
            style={{ objectFit: 'cover' }}
            unoptimized
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
