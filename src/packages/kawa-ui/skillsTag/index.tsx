import React from 'react';

export interface SkillsTagProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  className?: string;
}

export const SkillsTag: React.FC<SkillsTagProps> = ({
  children, 
  color,
  textColor,
  className = ''
}) => {
  const style: React.CSSProperties = {
    backgroundColor: color || '#f3f4f6', 
    color: textColor || '#111827', 
    padding: '4px 8px',
    borderRadius: '5px',  
    display: 'block',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '0.875rem', 
    width: 'fit-content',
  };

  return (
    <div 
      style={style} 
      className={className}
    >
      {children}
    </div>
  );
}