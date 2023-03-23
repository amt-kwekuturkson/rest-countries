import "./styles.css";
import React from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { Item } from "./listItems/Item";
import { Borders } from "./listItems/Borders";
import useFetch from "../../hooks/useFetch";
import { CountryProvider } from "../../components/CountryContext";
import { ItemList } from "./listItems/ItemList";
import { CountriesType } from "../../components/CustomTypes";

export const Details = () => {
  const navigate: NavigateFunction = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  const value = useFetch();

  const keyword = useLocation();

  const entered: string = keyword.state.name;
  const data: CountriesType[] = value.countries;

  const loading: boolean = value.loading;
  const output: CountriesType[] = data.filter((country) => {
    return country.name.toLowerCase() === entered.toLowerCase();
  });
  if (loading) return <p className="Loader">Loading...</p>;
  return (
    <div>
      <div className="details_top">
        <div className="back_container">
          <button id="back" onClick={navigateBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
        </div>
      </div>
      <div className="details_bottom">
        {output.map((item) => {
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
                      <Item
                        data={item.nativeName}
                        description={"Native Name: "}
                      />
                      <Item
                        data={item.population.toLocaleString()}
                        description={"Population: "}
                      />
                      <Item data={item.region} description={"Region: "} />
                      <Item
                        data={item.subregion}
                        description={"Sub Region: "}
                      />
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
                    <CountryProvider
                      countries={data}
                      search={undefined}
                      filter={undefined}
                      load={true}
                      word={""}
                      error={null}
                    >
                      <Borders
                        data={item.borders}
                        description={"Border Countries: "}
                      />
                    </CountryProvider>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
