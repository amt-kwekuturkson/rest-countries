import React from "react";

export const CountryContext = React.createContext();

export const CountryProvider = ({ children, data, load}) => {

  return (
    
    <CountryContext.Provider value={{ data, load}}>
      {children}
    </CountryContext.Provider>
  );
}


