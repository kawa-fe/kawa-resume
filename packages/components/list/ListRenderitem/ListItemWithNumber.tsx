import React from "react";
import { ListItemStyle } from "./index.style";

interface ListItemWithNumberProps<T> {
  item: T;
  index: number;
}

export function ListItemWithNumber<T>({
  item,
  index,
}: ListItemWithNumberProps<T>) {

  const listItemNumberStyle: React.CSSProperties = {
    color: "#ffffff",
    backgroundColor: "#3498db",
    borderRadius: "50%",
    aspectRatio: "1 / 1",
    width: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginRight: "5px",
  };

  return (
    <div style={ListItemStyle}>
      <span style={listItemNumberStyle}>{index + 1}</span>
      <span>{String(item)}</span>
    </div>
  );
}
