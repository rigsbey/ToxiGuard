import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};
