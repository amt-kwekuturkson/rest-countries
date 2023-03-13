import React from "react";

export const CountryContext = React.createContext();

export const CountryProvider = ({ children, data, load, filter, error}) => {

  return (
    
    <CountryContext.Provider value={{ data, load, filter, error}}>
      {children}
    </CountryContext.Provider>
  );
}


