import React, { forwardRef } from "react";

const enumMap = {
  基本信息: "Basic Info",
  工作经历: "Work Experience",
  项目经历: "Project Experience",
  实习经历: "Internship Experience",
  开源项目: "Open Source Experience",
  技能清单: "Skill List",
  兴趣爱好: "Hobbies",
  自我评价: "Self Evaluation",
};

interface ResumeHeaderProps {
  type?: keyof typeof enumMap;
}

export const ResumeHeader = React.memo(
  forwardRef<HTMLDivElement, ResumeHeaderProps>(
    ({ type = "基本信息" }, ref) => {
      return (
        <div 
          ref={ref} 
          className="w-full flex items-center py-[7.5px] text-[21px] font-semibold text-[#4b7bec] border-b-[3px] border-[#4b7bec]"
        >
          {type}
          <div className="text-[16.5px] font-semibold text-[#a5b1c2] tracking-[1.5px] pl-[16.5px] self-end">
            {enumMap[type]}
          </div>
        </div>
      );
    }
  )
);

ResumeHeader.displayName = "ResumeHeader";
