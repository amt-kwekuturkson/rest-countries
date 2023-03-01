import React from "react";
import { useOption } from "../hooks/useOption.tsx";


export const FilterButtons = () => {
const {onToggleDropDown, isDisplayed} = useOption()
  return (
    <div className="filter_container">
      <button className="search_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
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
          outline="none"
        />
      </button>
      <div className="button_container" >
        <button className="filter_button" onClick={onToggleDropDown} >
         <p className="filter_text">Filter by Region</p>
         <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
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
      <div  className="dropdown_content" style={{display: isDisplayed ? 'block' : 'none'}}>
        <li id="africa" value='africa' >Africa</li>
        <li id='america' value='america'>America</li>
        <li id='asia' value='asia'>Asia</li>
        <li id='europe' value='europe'>Europe</li>
        <li id='oceania' value='oceania'>Oceania</li>
      </div>
      </div>
   
    </div>
    
  );
};
