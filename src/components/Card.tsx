import React from 'react';

interface CardProps {
  children: React.ReactNode;
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ children, imageSrc }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imageSrc && (
        <img src={imageSrc} className="card-img-top" alt="Card" />
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
