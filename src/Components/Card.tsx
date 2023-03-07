import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.tsx";



export const Card = () => {
  const navigate = useNavigate();

  const cardClicked = () => {
    navigate(`/details/`);
    
  };

 const { countries } = useFetch('https://restcountries.com/v2/all?fields=name,capital,population,region,flag')

  return (
         countries.map((country) => {
            return (
             
              <div className="card" onClick={cardClicked} key={country.id}>
                <div className="flag">
                  <img src={country.flag} alt="flag" />
                </div>
                <div className="country-details">
                  <div className="country_name">
                    <p>{country.name}</p>
                  </div>
                  <div className="country_info">
                    <div className="population">Population:{country.population}</div>
                    <div className="region">Region:{country.region}</div>
                    <div className="capital">Capital:{country.capital}</div>
                  </div>
                </div>
              </div>
  
            );
         })
     


  );

};
