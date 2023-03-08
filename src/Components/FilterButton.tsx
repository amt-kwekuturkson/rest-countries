import React, {useState, useRef, useContext} from "react";
import { CountryContext } from "./CountryContext.tsx";


const FilterButton = () => {

  const [ dropdown, setDropdown ] = useState(false);
  const buttonRef = useRef();
  const dropDownRef = useRef();

  window.addEventListener("click", (e) => { 
    if(e.target !== dropDownRef.current && e.target !== buttonRef.current) {
     setDropdown(false);
    }
  }
  )

  const value = useContext(CountryContext);
  const region = value.filter;
  if (value.load) return <p className="Loader">Loading...</p>;
    return (
 
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
              <li id="Americas" value="americas" onClick={region}  >
                Americas
              </li>
              <li id="Asia" value="asia" onClick={region} >
                Asia
              </li>
              <li id="Europe" value="europe" onClick={region} >
                Europe
              </li>
              <li id="Oceania" value="oceania" onClick={region} >
                Oceania
              </li>
          </div>
          }
        </div>
   
    );
}

export default FilterButton;