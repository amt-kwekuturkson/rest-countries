import { click } from "@testing-library/user-event/dist/click";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch.tsx";


export const detVal = (e) => {
  if(e.target.tagName === 'BUTTON') {
    console.log(e.target.lastChild.firstChild.firstChild.innerHTML) 
    const detname = (e.target.lastChild.firstChild.firstChild.innerHTML).toString()
    console.log(detname);
    
    return {detname};
  }
}


export const Home = () => {
  const navigate = useNavigate();

  const cardClicked = (e) => {
    navigate(`/details/`)
   detVal(e)
  };


  const [ dropdown, setDropdown ] = useState(false);

  const buttonRef = useRef();
  const dropDownRef = useRef();


  const { countries, region, search, loading, detailedInfo} = useFetch();

  if (loading) return <h1>Loading</h1>;
  
   window.addEventListener("click", (e) => { 
     if(e.target !== dropDownRef.current && e.target !== buttonRef.current) {
      setDropdown(false);
     }
   }
   )

  return (
    
    <div className="App">
      <div className="filter_container">
        <div className="search_container">
          <button className="search_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Search</title>
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M338.29 338.29L448 448"
              />
            </svg>
            <input
              type="text"
              className="search_bar"
              placeholder="Search for a country..."
              onChange={search}
            />
          </button>
        </div>
        <div className="button_container">
          <button className="filter_button" onClick={ () => setDropdown(!dropdown)} ref = {buttonRef}>
            <p className="filter_text">Filter by Region</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Down</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
          </button>
          {
            dropdown &&  <div
            className="dropdown_content"
            onClick={ () => setDropdown(false) }
            ref = {dropDownRef}
          >
              <li id="Africa" value="africa" onClick={region} >
                Africa
              </li>
              <li id="Americas" value="americas" onClick={region}>
                Americas
              </li>
              <li id="Asia" value="asia" onClick={region}>
                Asia
              </li>
              <li id="Europe" value="europe" onClick={region}>
                Europe
              </li>
              <li id="Oceania" value="oceania" onClick={region}>
                Oceania
              </li>
          </div>
          }
         
        </div>
      </div>
      <div className="card_container"  id="button-group">
        {countries.map((country) => {
          return (
         <button className="card"  onClick={cardClicked}   >
              <div className="flag">
                <img src={country.flag} alt="flag" />
              </div>
              <div className="country-details">
                <div className="country_name" id='name'>
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
            </button>
          );
        })}
        <div className="spaceShift"></div>
      </div>
    </div>
  );
};
