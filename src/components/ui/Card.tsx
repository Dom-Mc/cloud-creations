import React from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
  $elevated?: boolean;
  $interactive?: boolean;
  $variant?: 'default' | 'innovation' | 'environment' | 'privacy';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card; 