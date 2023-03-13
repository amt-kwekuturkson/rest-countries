import React, { useEffect, useState } from "react";

import "./styles.css";

import { useLocation, useNavigate } from "react-router-dom";
import { Item } from "./listItems/Item.tsx";
import { ItemList } from "./listItems/ItemList.tsx";
import { Borders } from "./listItems/Borders.tsx";


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
    const value = entered;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v2/name/${value}?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`
        );
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [entered]);

  if (loading) return <p className="Loader">Loading...</p>;


  console.log(data);

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
      {data.map((item) => {
        return (
          <>
            <div className="details_container">
              <div className="flag_container">
                <img alt="flag" src={item.flag} />
              </div>
              <div className="details_section">
                <p id="country_name">{item.name}</p>
                <div className="country_details">
                  <div className="details_left">
                    <Item data={item.nativeName} description={"Native Name: "} />
                    <Item data={item.population} description={"Population: "} />
                    <Item data={item.region} description={"Region: "} />
                    <Item data={item.subregion} description={"Sub Region: "} />
                    <Item data={item.capital} description={"Capital: "} />
                  </div>
                  <div className="details_right">
                    <Item
                      data={item.topLevelDomain}
                      description={"Top Level Domain: "}
                    />
                    <ItemList
                      data={item.currencies}
                      description={"Currencies: "}
                    />
                    <ItemList
                      data={item.languages}
                      description={"Languages: "}
                    />
                  </div>
                </div>
                <div className="border_countries">
                  <Borders
                    data={item.borders}
                    description={"Border Countries: "}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
