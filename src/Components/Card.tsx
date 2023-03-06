import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();

  const cardClicked = (e) => {
    navigate(`/details/`);
    console.log(e.target.id);
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

     try{ const response = await fetch(
         'https://restcountries.com/v2/all?fields=name,capital,population,region,flag'
      );
      const data = await response.json();
      console.log(data);
      setCountries(data);
    }catch(error){ 
      console.log(error);
    }
   };
   fetchData();
  }, []);

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
