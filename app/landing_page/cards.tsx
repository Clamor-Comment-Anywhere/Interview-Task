import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-custom-card shadow-custom-card m-4 p-16 ">
      {children}
    </div>
  );
};

export default Card;