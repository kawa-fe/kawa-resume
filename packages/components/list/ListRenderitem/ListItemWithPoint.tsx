import React from 'react';
import { ListItemStyle } from './index.style';

interface ListItemWithPointProps<T> {
  item: T;
}

const ListItemPointStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#2d3436',
  marginRight: '10px',
  display: 'flex',
};

export function ListItemWithPoint<T>({ item }: ListItemWithPointProps<T>) {
  return (
    <div style={ListItemStyle}>
      <span style={ListItemPointStyle}></span>
      <span>{String(item)}</span>
    </div>
  );
}