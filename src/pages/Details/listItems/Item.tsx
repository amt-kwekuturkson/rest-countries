import React from "react";


const noData = (props) => {
 

    return <p>{props}</p>
}
const Data = (props) => {

    return <p>{props.description} <span>{props.available}</span></p>
}


export const Item = (props) => {

  const available = props.data;
 const description = props.description;

  if (available) {
    return Data({description,available});
  }
  return noData(description);
}