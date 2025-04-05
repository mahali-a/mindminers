import React from 'react';

interface GradientBadgeProps {
  text: string;

  className?: string;

  onClick?: () => void;
}

const GradientBadge: React.FC<GradientBadgeProps> = ({ text = 'NEVER STOP LEARNING', className = '', onClick }) => {
  return (
    <div className={`relative inline-block ${className}`} onClick={onClick}>
      {/* Badge with gradient background */}
      <div
        className="px-10 py-2 rounded-full text-black font-bold text-sm border-2 border-black"
        style={{
          background: 'linear-gradient(90deg, #F7D974 0%, #ED9AD6 100%)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default GradientBadge;
