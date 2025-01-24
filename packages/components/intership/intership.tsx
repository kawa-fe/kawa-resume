import React, { forwardRef, memo } from "react";
import { InternType } from "./intership.type";

export const Intern = memo(
  forwardRef(
    (
      { period, company, group, job, companyLogoUrl }: InternType,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div
          ref={ref}
          className="w-full flex items-center my-[7.5px] bg-[#e3edff] px-[7.5px] py-[3px]"
        >
          <span className="text-[16.5px] font-normal tracking-[1.5px] text-[#707780]">
            {period}
          </span>
          <span className="text-[16.5px] font-extrabold text-[#4b7bec] mx-[16.5px]">
            {group ? `${company} | ${group}` : company}
          </span>
          <span className="text-[16.5px] font-normal tracking-[1.5px] text-[#707780]">
            {job}
          </span>
          <img
            src={companyLogoUrl}
            alt={`${company} logo`}
            className="h-[25px] ml-auto"
          />
        </div>
      );
    }
  )
);

export default Intern;
