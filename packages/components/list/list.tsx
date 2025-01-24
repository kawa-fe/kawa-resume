import React, { forwardRef, memo } from "react";
import type { ListProps } from "./list.types";

const List = memo(
  forwardRef(<T,>({ data, renderItem = (item: T) => <div>
        {String(item)}
      </div> }: ListProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} role="list">
        {data.map((item, index) => (
          <div key={index} role="listitem">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  })
);

export default List;
