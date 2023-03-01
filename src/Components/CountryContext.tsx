import React, { useState } from "react";

export const CountryContext = React.createContext();

export const CountryProvider = ({ children, countries }) => {
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState();

  return (
    <CountryContext.Provider
      value={{ countries, region, search, setRegion, setSearch }}
    >
      {children}
    </CountryContext.Provider>
  );
};