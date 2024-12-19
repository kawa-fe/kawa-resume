import React, { forwardRef, memo } from "react";
import { InternType } from "./intern.types";
import {
  companyLogoStyle,
  CompanyNameStyle,
  InternStyle,
  JobStyle,
  PeriodStyle,
} from "./index.style";

const Intern = memo(
  forwardRef(
    (
      { period, company, group, job, companyLogoUrl }: InternType,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div style={InternStyle} ref={ref}>
          <span style={PeriodStyle}>{period}</span>
          <span style={CompanyNameStyle}>
            {group ? `${company} | ${group}` : company}
          </span>
          <span style={JobStyle}>{job}</span>
          <img
            src={companyLogoUrl}
            alt={`${company} logo`}
            style={companyLogoStyle}
          />
        </div>
      );
    }
  )
);

export default Intern;
