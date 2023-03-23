import React from "react";
import { useContext, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { CountryContext } from "./CountryContext";
import { DataType } from "./CustomTypes";

const CardList = () => {
  const navigate = useNavigate();

  let data = useContext<DataType>(CountryContext);

  if (data.load) return <p className="Loader">Loading...</p>;

  if (data.error) return <h1>Error: {data.error}</h1>;

  const cardClicked = (event: MouseEvent<HTMLButtonElement>) => {
    let name = event.currentTarget.getAttribute("id");
    navigate(`/details/`, { state: { name: name } });
  };
  let word = data.word;

  let out = data.countries.filter((country) => {
    return word === "" ? country : country.name.toLowerCase().includes(word);
  });

  return (
    <div className="card_container">
      {out.map((country, index: number) => {
        return (
          <button
            className="card"
            onClick={cardClicked}
            key={index}
            id={country.name}
          >
            <div className="flag">
              <img src={country.flag} alt="flag" />
            </div>
            <div className="country-details">
              <div className="country_name">
                <p>{country.name}</p>
              </div>
              <div className="country_info">
                <div className="population">
                  Population: <span>{country.population.toLocaleString()}</span>
                </div>
                <div className="region">
                  Region: <span>{country.region}</span>
                </div>
                <div className="capital">
                  Capital: <span>{country.capital}</span>
                </div>
              </div>
            </div>
          </button>
        );
      })}
      <div className="spaceShift"></div>
      <div className="spaceShift"></div>
      <div className="spaceShift"></div>
      <div className="spaceShift"></div>
    </div>
  );
};

export default CardList;
