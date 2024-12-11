export enum SkillTagType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary'
  }
  
  export interface SkillTagProps {
    type?: SkillTagType;
    color?: string;
    children: string;
  }