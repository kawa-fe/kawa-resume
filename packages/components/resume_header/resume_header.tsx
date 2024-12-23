import React, { forwardRef } from 'react';
import './resume_header.style.ts';
import { EnTitleStyle, ResumeHeaderStyle } from './resume_header.style.ts';
const enumMap = {
    "基本信息": "Basic Info",
    "工作经历": "Work Experience",
    "项目经历": "Project Experience",
    "实习经历": "Internship Experience",
    "开源项目": "Open Source Experience",
    "技能清单": "Skill List",
    "兴趣爱好": "Hobbies",
    "自我评价": "Self Evaluation"
};

interface ResumeHeaderProps {
    type?: keyof typeof enumMap;
}

const ResumeHeader = React.memo(forwardRef<HTMLDivElement, ResumeHeaderProps>(
    ({ type = "基本信息" }, ref) => {
        return (
            <div ref={ref} style={ResumeHeaderStyle}>
                {type}
                <div style={EnTitleStyle}>{enumMap[type]}</div>
            </div>
        );
    }
));

ResumeHeader.displayName = 'ResumeHeader';

export default ResumeHeader;