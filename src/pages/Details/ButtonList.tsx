import React from "react";

export const ButtonList = (props) => {
    const arr = props.data;
    return (
     arr.map((el) => {
  
      <button>{el}</button>
      
      return <div className="border_countries"><button>{el}</button></div>
     }
     )
  
    );
  
  }