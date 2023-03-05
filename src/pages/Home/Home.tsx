import React from "react"
import { CardList } from "../../Components/CardList.tsx";
import { CountryProvider } from "../../Components/CountryContext.tsx";

import { FilterButtons } from "../../Components/Filtering.tsx";


export const Home = () => {

return (
    <CountryProvider countries={countries}>
    <div className="App" >
      <FilterButtons />
        <div className="card_container">
            <CardList/>
            <div className="spaceShift"></div>
        </div>   
    </div>
  </CountryProvider>

)
}


const countries = [
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
    {
      flag: "",
      name: "Ghana",
      population: 20000000,
      region: "Africa",
      capital: "San Francisco",
    },
  ];