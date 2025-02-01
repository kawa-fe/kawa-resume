import type React from 'react';
import { forwardRef, memo } from 'react';
import type { ListProps } from './list.types';

const List = memo(
  forwardRef(
    <T,>(
      {
        data,
        renderItem = (item: T) => <div>{String(item)}</div>,
      }: ListProps<T>,
      ref: React.ForwardedRef<HTMLUListElement>,
    ) => {
      return (
        <ul ref={ref}>
          {data.map((item, index) => (
            <li key={crypto.randomUUID()}>{renderItem(item, index)}</li>
          ))}
        </ul>
      );
    },
  ),
);

export default List;
