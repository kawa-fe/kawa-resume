import React from 'react';
import { SkillTagType, SkillTagProps } from '../../kawa-foundation/skillTag/constant';
import '../../kawa-foundation/skillTag/skillTag.scss';

const SkillTag: React.FC<SkillTagProps> = ({ 
  type = SkillTagType.PRIMARY, 
  color,
  children 
}) => {
  // 处理自定义颜色逻辑
  const customStyle = color ? {
    backgroundColor: color,
    color: 'white'  // 默认自定义颜色的文字为白色
  } : {};

  const className = color 
    ? 'kawa-skill-tag kawa-skill-tag-custom' 
    : `kawa-skill-tag kawa-skill-tag-${type}`;

  return (
    <div 
      className={className} 
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default SkillTag;