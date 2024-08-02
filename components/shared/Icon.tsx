// Icon.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  Icon: IconType;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ Icon, className }) => (
  <Icon className={`text-5xl ${className}`} />
);
