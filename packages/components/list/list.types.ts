import React from 'react';

export interface ListProps<T> {
  data: T[];
  renderItem?: (item: T, index?: number) => React.ReactNode;
}