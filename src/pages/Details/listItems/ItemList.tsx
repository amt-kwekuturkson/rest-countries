import React from "react";


const noData = (props) => {
 

    return <p>{props}</p>
}
const DataItem = (props) => {
    
    return <p>{props.description} {props.available}</p>
}
const DataList = (props) => { 

 const arr = props.available;

 return (
         <p>{props.description}
{  arr.map((el) => {
   return(
   <span> {el.name} </span> )
}
)}
    </p>
   );

}

export const ItemList = (props) => {

  const available = props.data;
 const description = props.description;

 const check = !Array.isArray(available);

  if (check) {
   return DataItem({available, description});
  }
  if(!check) {
   return DataList({available, description});
  }
  return noData(description);
}