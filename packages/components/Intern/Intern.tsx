import React, { forwardRef, memo } from "react";
import { InternType } from "./intern.types";

export const Intern = memo(
  forwardRef(
    (
      { period, company, group, job, companyLogoUrl }: InternType,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div ref={ref}>
          <span>{period}</span>
          <span>{group ? `${company} | ${group}` : company}</span>
          <span>{job}</span>
          <img src={companyLogoUrl} alt={`${company} logo`} />
        </div>
      );
    }
  )
);

export default Intern;
