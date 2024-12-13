import React from "react";
import "./skillTags.scss";

export enum SkillTagType {
  PRIMARY = "primary", //正常
  MINI = "mini", //中等
  LARGE = "large", //最小
}

export interface SkillTagProps {
  size?: SkillTagType;
  color?: string;
  children: string;
  fontWeight?: number;
  fontSize?: number;
}

const getTagStyles = (size: SkillTagType) => {
  switch (size) {
    case SkillTagType.PRIMARY:
      return {
        fontSize: 14,
        fontWeight: 600,
        padding: "8px 16px",
      };
    case SkillTagType.MINI:
      return {
        fontSize: 12,
        fontWeight: 400,
        padding: "6px 12px",
      };
    case SkillTagType.LARGE:
      return {
        fontSize: 16,
        fontWeight: 800,
        padding: "10px 18px",
      };
    default:
      return {
        fontSize: 14,
        fontWeight: 500,
        padding: "8px 16px",
      };
  }
};

const SkillTag: React.FC<SkillTagProps> = ({
  size = SkillTagType.PRIMARY,
  color = '#1890ff', // 默认蓝色
  children,
  fontWeight,
  fontSize,
}) => {
  const tagStyles = getTagStyles(size);

  const customStyle = {
    fontSize: fontSize || `${tagStyles.fontSize}px`,
    fontWeight: fontWeight || tagStyles.fontWeight,
    padding: tagStyles.padding,
    color: color,
    backgroundColor: `${color}20`, // 20%透明度背景
    borderColor: color,
    border: `1px solid ${color}`,
  };

  const className = [
    "kawa-skill-tag",
    `kawa-skill-tag-${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} style={customStyle}>
      {children}
    </div>
  );
};

export default SkillTag;