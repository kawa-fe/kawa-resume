import React from "react";

type ListItemType = "point" | "number";

interface ListItemProps<T> {
  item: T;
  type?: ListItemType;
  index?: number;
}

export function ListItem<T>({ 
  item, 
  type = "point", 
  index 
}: ListItemProps<T>) {
  const renderList = () => {
    switch (type) {
      case "point":
        return (
          <span 
            className="w-[10px] h-[10px] rounded-full bg-[#2d3436] mr-[10px] flex"
          />
        );
      case "number":
        return index !== undefined ? (
          <span 
            className="text-white bg-[#3498db] rounded-full aspect-square w-[24px] flex justify-center items-center font-bold mr-[5px]"
          >
            {index + 1}
          </span>
        ) : null;
    }
  };

  return (
    <div className="flex items-center py-[2.5px]">
      {renderList()}
      <span>{String(item)}</span>
    </div>
  );
}