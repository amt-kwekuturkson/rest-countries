import React from "react";
import {useNavigate } from 'react-router-dom';

export const Card = ({ flag, name, population, region, capital }) => {

  const navigate = useNavigate();

  const cardClicked = () => {
     navigate(`/details/`);
  }

  return (
    <div>
        <div className="card" onClick={cardClicked}>
          <div className="flag">
            <img src={flag} alt="flag" />
          </div>
          <div className="country-details">
            <div className="country_name">
              <p>{name}</p>
            </div>
            <div className="country_info">
              <div className="population">Population:{population}</div>
              <div className="region">Region:{region}</div>
              <div className="capital">Capital:{capital}</div>
            </div>
          </div>
        </div>
    </div>
  );
};
