import React from "react";

interface ListItemWithPointProps<T> {
  item: T;
}

export function ListItemWithPoint<T extends { toString(): string }>({ item }: ListItemWithPointProps<T>) {
  return (
    <div className="flex items-center py-[2.5px]">
      <span className="w-[10px] h-[10px] rounded-full bg-[#2d3436] mr-[10px] flex"></span>
      <span>{item.toString()}</span>
    </div>
  );
}