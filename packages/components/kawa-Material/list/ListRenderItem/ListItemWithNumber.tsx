import React from "react";

interface ListItemWithNumberProps<T> {
  item: T;
  index: number;
}

export function ListItemWithNumber<T>({
  item,
  index,
}: ListItemWithNumberProps<T>) {
  return (
    <div className="flex items-center py-[2.5px]">
      <span className="text-white bg-[#3498db] rounded-full aspect-square w-[24px] flex justify-center items-center font-bold mr-[5px]">
        {index + 1}
      </span>
      <span>{String(item)}</span>
    </div>
  );
}