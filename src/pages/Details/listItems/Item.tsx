import React from "react";

interface ItemType {
  data: string | number | string[];
  description: string;
}

const noData = (props: string) => {
  return <p>{props}</p>;
};
const Data = (props: ItemType) => {
  return (
    <p>
      {props.description} <span>{props.data}</span>
    </p>
  );
};

export const Item = (props: ItemType) => {
  const data: string | number | string[] = props.data;
  const description: string = props.description;

  if (data) {
    return Data({ description, data });
  }
  return noData(description);
};
