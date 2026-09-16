import React from 'react';

interface ApexLogoProps {
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ApexLogo: React.FC<ApexLogoProps> = ({ 
  showTagline = false, 
  className = '', 
  size = 'md' 
}) => {
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.2 : 1;

  return (
    <div className={`apex-logo-container flex flex-col ${className}`} style={{ textDecoration: 'none' }}>
      <div className="flex items-center gap-xs" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
        <svg width="40" height="30" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <polygon points="0,38 38,0 44,0 6,38" fill="#1e293b" />
          <polygon points="6,38 44,0 48,0 14,38" fill="#2563eb" />
          <polygon points="14,38 48,0 52,4 22,38" fill="#38bdf8" />
        </svg>

        <span 
          style={{
            fontFamily: "'Nunito', 'Arial Black', sans-serif",
            fontWeight: 900,
            fontSize: '1.85rem',
            fontStyle: 'italic',
            color: '#E53935',
            letterSpacing: '-0.5px',
            lineHeight: 1
          }}
        >
          APEX
        </span>
      </div>

      {showTagline && (
        <span 
          className="text-[11px] font-bold text-text opacity-90 mt-xs tracking-tight"
          style={{ maxWidth: '280px', lineHeight: 1.2 }}
        >
          A center of excellence in medical imaging and diagnostics
        </span>
      )}
    </div>
  );
};

export default ApexLogo;
