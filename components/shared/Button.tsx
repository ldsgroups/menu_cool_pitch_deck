// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className }) => (
  <button 
    onClick={onClick} 
    className={`bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full opacity-70 hover:opacity-100 transition-opacity ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);
