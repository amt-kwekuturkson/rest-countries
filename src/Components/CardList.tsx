import React, { useContext } from "react";
import { Card } from "./Card.tsx";
import { CountryContext } from "./CountryContext.tsx";

export const CardList = () => {
  // Your code here!
  const { countries } = useContext(CountryContext);

  return (
    // countries.map(country => {
    //   <Card {...country} key={country.name} />
    // })
    countries.map((country) => (
        <Card {...country} key={country.name} />
    ))
  );
};
