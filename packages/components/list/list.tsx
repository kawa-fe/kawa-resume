import React, { forwardRef, memo } from "react";
import type { ListProps } from "./list.types";

const List = memo(
  forwardRef(<T,>({ data, renderItem = (item: T) => <div>
        {String(item)}
      </div> }: ListProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        {data.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>
    );
  })
);

export default List;
