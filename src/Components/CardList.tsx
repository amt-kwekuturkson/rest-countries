import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CountryContext } from "./CountryContext.tsx";


const CardList = () => {
  const navigate = useNavigate();


  const value = useContext(CountryContext);

  if (value.load) return <p className="Loader">Loading...</p>;
  
  if(value.error) return <h1>Error: {value.error}</h1>;
  const cardClicked = (e) => {
    // navigate(`/details/`);
    let name = e.currentTarget.getAttribute("id");
    console.log(name);
    navigate(`/details/`,{state:{name:name}});
  
  };

  return (
    <div className="card_container">
      {value.data.map((country, index: number) => {
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
              <div className="country_name" >
                <p>{country.name}</p>
              </div>
              <div className="country_info">
                <div className="population">
                  Population:{country.population}
                </div>
                <div className="region">Region:{country.region}</div>
                <div className="capital">Capital:{country.capital}</div>
              </div>
            </div>
            <div></div>
          </button>
        );
      })}
      <div className="spaceShift"></div>
    </div>
  );
};

export default CardList;
