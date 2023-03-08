import React from "react";

export const CountryContext = React.createContext();

export const CountryProvider = ({ children, data, load, filter}) => {

  return (
    
    <CountryContext.Provider value={{ data, load, filter}}>
      {children}
    </CountryContext.Provider>
  );
}


