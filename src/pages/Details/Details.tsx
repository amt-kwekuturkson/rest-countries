import React, { useEffect, useState } from "react";
import { ButtonList } from "./ButtonList.tsx";
import "./styles.css";

import { useLocation, useNavigate } from "react-router-dom";

export const Details = () => {

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };


  const keyword = useLocation();

const entered = keyword.state.name;


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const value =  entered;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://restcountries.com/v2/name/${value}?fields=name,capital,population,region,flag,subregion,languages,currencies,borders,topLevelDomain`);
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]);
 
  if (loading) return <p>Loading...</p>;

   console.log(data);
  
  return (
<div>
  {data.map((item) => {
return (
  <div className="container">
        <button id="back" onClick={navigateBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Arrow Back</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>
          <p>Back</p>
        </button>
        <div className="details_page">
          <div className="flag_container">
            <img alt="flag" src={item.flag} />
          </div>
          <div className="details_container">
            <p id="country_name">{''}</p>
            <div className="country_details">
              <div className="details left">
                <p>Native Name:{item.name}</p>
                <p>Population:{item.population}</p>
                <p>Region:{item.region}</p>
                <p>Sub Region:{item.subregion}</p>
                <p>Capital:{item.capital}</p>
              </div>
              <div className="details right">
                <p>Top Level Domain:{item.topLevelDomain}</p>
                <p>Currencies:{item.currencies[0].name}</p>
                <p>Languages:{item.languages[0].name}</p>
              </div>
            </div>
            <div className="neighbours_container">
              <p>Border Countries:</p>
              {/* <ButtonList data={''} /> */}
              
            </div>
          </div>
        </div>
      </div>

)
  })

  }
</div>
  );
};
