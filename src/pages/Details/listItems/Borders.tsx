import React from "react";
import { CodeConverter } from "../CodeConverter.tsx";

const noData = (props) => {
 

    return <p>{props}:</p>
}
const DataItem = (props) => {
    
    return <p>{props.description}: {props.available}</p>
}


const DataList = (props) => { 
  
 const arr = props.available;

 return (
    <div className="border_countries">
         <p>{props.description}</p>
{  arr.map((el) => {
   const result = CodeConverter(el);
   return(
    

   <button>{result.data.name} </button> )
}
)}

    </div>
  
 
   );

}


export const Borders = (props) => {

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

// export const Borders = (props) => {
   
//   const arr = props.data;


 
//     return (
//      arr.map((el) => {
  
//       <button>{el}</button>
      
//       return <div className="border_countries"><button>{el}</button></div>
//      }
//      )
  
//     );
//   }