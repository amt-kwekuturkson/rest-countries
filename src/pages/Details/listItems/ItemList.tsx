import React from "react";
import { Currencies, Languages } from "../../../components/CustomTypes";

interface ItemArrayType {
  data: Currencies[] | Languages[];
  description: string;
}

const noData = (props: string) => {
  return <p>{props}</p>;
};

const DataItem = (props: ItemArrayType) => {
  return (
    <>
      {props.description}
      {props.data}
    </>
  );
};

const DataList = (props: ItemArrayType) => {
  const arr: Currencies[] | Languages[] = props.data;
  let display: string = arr
    .map((el) => {
      return el.name;
    })
    .join(", ");
  console.log("display", display);

  return (
    <p>
      {props.description}
      <span>{display}</span>
    </p>
  );
};

export const ItemList = (props: ItemArrayType) => {
  const data: Currencies[] | Languages[] = props.data;
  const description: string = props.description;

  const check: boolean = !Array.isArray(data);

  if (check) {
    return DataItem({ data, description });
  }
  if (!check) {
    return DataList({ data, description });
  }
  return noData(description);
};
