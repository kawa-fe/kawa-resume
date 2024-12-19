import React, { forwardRef, memo } from "react";
import { InternType } from "./intern.types";

const Intern = memo(
  forwardRef(
    (
      { period, company, group, job, companyLogoUrl }: InternType,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div ref={ref}>
          <div>
            <div>
              <h3>{job}</h3>
              <p>
                {company} - {group}
              </p>
              <p>{period}</p>
            </div>
            <div>
              {companyLogoUrl && (
                <img src={companyLogoUrl} alt={`${company} logo`} />
              )}
            </div>
          </div>
        </div>
      );
    }
  )
);

export default Intern;
