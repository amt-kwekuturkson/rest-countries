import React from "react";
import { DataType } from "./CustomTypes";

export const CountryContext = React.createContext<DataType>({} as DataType);

interface Child extends DataType {
  children: React.ReactNode;
}
export const CountryProvider = ({
  children,
  countries,
  load,
  filter,
  word,
  search,
  error,
}: Child) => {
  return (
    <CountryContext.Provider
      value={{ countries, load, filter, search, word, error }}
    >
      {children}
    </CountryContext.Provider>
  );
};
