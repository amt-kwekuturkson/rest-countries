
import React from "react";
import { ButtonList } from "./ButtonList.tsx";
import "./styles.css";

import {useNavigate } from 'react-router-dom';


export const Details = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountry
}) => {
  const arr = [];
  
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate('/')
  }

  return (
    <div>
      <div className="container">
       <button id="back" onClick={navigateBack}>
       <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
        <p>Back</p>
        </button>
        
        <div className="details_page">
          <div className="flag_container">
            <img alt="flag" src={flag} />
          </div>
          <div className="details_container">
            <p id="country_name">Ghana{name}</p>
            <div className="country_details">
              <div className="details left">
                <p>Native Name:{nativeName}</p>
                <p>Population:{population}</p>
                <p>Region:{region}</p>
                <p>Sub Region:{subRegion}</p>
                <p>Capital:{capital}</p>
              </div>
              <div className="details right">
                <p>Top Level Domain:{topLevelDomain}</p>
                <p>Currencies:{currencies}</p>
                <p>Languages:{languages}</p>
              </div>
            </div>
            <div className="neighbours_container">
              <p>Border Countries:</p>
                <ButtonList data={arr} />
            </div>
          </div>
        </div>
      </div>
   

    </div>
  );
};
